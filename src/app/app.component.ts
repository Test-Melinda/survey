import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager } from 'survey-angular';
import { SurveySpecificationService } from "src/app/survey/survey-specification.service";
import { ResponseConverterService } from "src/app/survey/response-converter.service";
import { LimesurveyQuestionsMapping } from "./survey/limesurvey-questions-mapping";
import { LimesurveyResponseBuilder } from "./limesurvey/limesurvey-response-builder";
import { LimesurveyClientFactoryService, LimesurveyClientCredentials } from "src/app/limesurvey/limesurvey-client-factory.service";

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    
    constructor(public surveySpecification: SurveySpecificationService, public responseConverter: ResponseConverterService, public limesurveyClientFactory: LimesurveyClientFactoryService){
    }

    ngOnInit() {
        let locale = 'en';
        
        StylesManager.applyTheme( "bootstrap" );
        
        var survey = new Model(this.surveySpecification.getLocalizedModel(locale) );
        survey.onComplete.add((response) => {
            this.processResponse(response);
        });

        SurveyNG.render( "surveyElement", {
            model: survey
        } );
    }

    private processResponse(response) {
        let responseData = response.data;
        
        // Detect survey region
        let surveyRegion = null;
        
        // Convert to Limesurvey response
        let limesurveyResponseData = this.responseConverter.toLimesurveyResponse(responseData, surveyRegion);
        
        console.log("original response", response.data);
        console.log("limesurvey response data", limesurveyResponseData);
        
        // Build the full response information
        let builder = new LimesurveyResponseBuilder();
        builder.datestamp = new Date();
        builder.startDate = new Date(); // TODO: Change this!
        builder.startLanguage = 'it'; // TODO: Change this!
        builder.responses = limesurveyResponseData;
        let limesurveyResponse = builder.build();
        
        console.log("full limesurvey response", limesurveyResponse);
        
        // Create the client to communicate with Limesurvey
        let limesurveyCredentials = new LimesurveyClientCredentials();
        limesurveyCredentials.url = "http://localhost/limesurvey/index.php/admin/remotecontrol";
        limesurveyCredentials.username = "admin";
        limesurveyCredentials.password = "admin";
        this.limesurveyClientFactory.createClient(limesurveyCredentials).subscribe((limesurveyClient) => {
            console.log("limesurvey client", limesurveyClient);
            
            // Add the survey response
            limesurveyClient.addResponse(123248, limesurveyResponse).subscribe((responseId: number) => {
                console.log("Limesurvey response ID", responseId);
            });
        });
    }
}
