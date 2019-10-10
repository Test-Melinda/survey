import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager, Survey } from 'survey-angular';
import { SurveySpecificationService } from "src/app/survey/survey-specification.service";
import { ResponseConverterService } from "src/app/survey/response-converter.service";
import { LimesurveyQuestionsMapping, LimesurveyAnswerCode } from "./survey/limesurvey-questions-mapping";
import { LimesurveyResponseBuilder } from "./limesurvey/limesurvey-response-builder";
import { LimesurveyClientFactoryService, LimesurveyClientCredentials } from "src/app/limesurvey/limesurvey-client-factory.service";
import { ScoreCalculatorService } from "./score/score-calculator.service";

import { environment } from '../environments/environment';
import { LimesurveyMappingProviderService } from './survey/limesurvey-mapping-provider.service';
import { TranslateService } from '@ngx-translate/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    
    protected source = null;
    
    public SurveyStatus = SurveyStatus;
    public status: SurveyStatus = SurveyStatus.READY;
    public error = false;
    
    public score = null;
    
    constructor(protected translate: TranslateService, public surveySpecification: SurveySpecificationService, public responseConverter: ResponseConverterService, public limesurveyClientFactory: LimesurveyClientFactoryService, public limesurveyMappingProviderService: LimesurveyMappingProviderService, public scoreCalculator: ScoreCalculatorService){
        translate.setDefaultLang('en');
        
        this.source = new URLSearchParams(window.location.search).get('src') || null;
    }
    
    ngOnInit() {
        let locale = 'en';
        
        // Styling
        StylesManager.applyTheme( "bootstrap" );
        
        var survey = new Model(this.surveySpecification.getLocalizedModel(locale));
        survey.onComplete.add((response) => {
            this.processResponse(response);
        });
        
        // Doc: https://surveyjs.io/Examples/Library/?id=survey-customcss&platform=jQuery&theme=default
        SurveyNG.render( "surveyElement", {
            model: survey,
            css: {
                navigationButton: "btn",
                navigation: {
                    next: "btn-primary"
                },
                question: {
                    mainRoot: "sv_qstn px-4"
                }
            }
        });
    }

    private processResponse(response) {
        this.status = SurveyStatus.DONE;
        
        console.log("Original response data", response.data);
        
        let responseData = response.data;
        
        // Calculate the score
        this.score = this.scoreCalculator.calculate(responseData);
        console.log("Score", this.score);
        
        // Detect survey region
        let surveyRegion = null;
        
        // Convert to Limesurvey response
        let limesurveyAnswers = this.responseConverter.toLimesurveyResponse(responseData, surveyRegion);
        
        // Add the score to the hidden Limesurvey response
        let surveyId = this.limesurveyMappingProviderService.getSurveyId(surveyRegion);
        limesurveyAnswers.setResponse(new LimesurveyAnswerCode(surveyId, environment.limesurvey.metaQuestions.score.gid, environment.limesurvey.metaQuestions.score.qid), this.score);
        
        let limesurveyResponseData = limesurveyAnswers.toResponseData();
        console.log("Limesurvey response data", limesurveyResponseData);
        
        // Build the full response information
        let builder = new LimesurveyResponseBuilder();
        builder.datestamp = new Date();
        builder.startDate = new Date(); // TODO: Change this!
        builder.startLanguage = 'it'; // TODO: Change this!
        builder.responses = limesurveyResponseData;
        let limesurveyResponse = builder.build();
        
        console.log("Full limesurvey response data", limesurveyResponse);
        
        // Create the client to communicate with Limesurvey
        let limesurveyCredentials = new LimesurveyClientCredentials();
        limesurveyCredentials.url = environment.limesurvey.api.url;
        limesurveyCredentials.username = environment.limesurvey.api.username;
        limesurveyCredentials.password = environment.limesurvey.api.password;
        
        this.limesurveyClientFactory.createClient(limesurveyCredentials).subscribe((limesurveyClient) => {
            console.log("Limesurvey client", limesurveyClient);
            
            // Add the survey response
            limesurveyClient.addResponse(surveyId, limesurveyResponse).subscribe((responseId: number) => {
                console.log("Limesurvey response ID", responseId);
            }, (error) => {
                console.error("Cannot add response", error);
                this.error = true;
            });
        }, (error) => {
            console.error("Cannot authenticate with LimeSurvey platform", error);
            this.error = true;
        });
    }
    
    public onPrivacyAcceptance(accepted: boolean){
        console.log('Privacy accepted', accepted);
        if (accepted){
            this.status = SurveyStatus.DOING;
        }
    }
    
}

enum SurveyStatus {
    
    READY = 'ready',
    DOING = 'doing',
    DONE = 'done'
    
}
