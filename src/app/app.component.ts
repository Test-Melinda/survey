import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager, Survey, IQuestion } from 'survey-angular';
import { SurveySpecificationService } from "src/app/survey/survey-specification.service";
import { ResponseConverterService } from "src/app/survey/response-converter.service";
import { LimesurveyAnswerCode } from "./survey/limesurvey-questions-mapping";
import { LimesurveyResponseBuilder } from "./limesurvey/limesurvey-response-builder";
import { LimesurveyClientFactoryService, LimesurveyClientCredentials } from "src/app/limesurvey/limesurvey-client-factory.service";
import { ScoreCalculatorService } from "./score/score-calculator.service";
import { isDevMode } from '@angular/core';
import * as URI from 'urijs';

import { environment } from '../environments/environment';
import { LimesurveyMappingProviderService } from './survey/limesurvey-mapping-provider.service';
import { TranslateService } from '@ngx-translate/core';
import { LimesurveyClient } from './limesurvey/limesurvey-client';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    
    protected source = null;
    protected channel = null;
    
    public SurveyStatus = SurveyStatus;
    public status: SurveyStatus = SurveyStatus.LOADING;
    public surveyError = false;
    
    public score = null;

	private pilotSelectionQuestion = "QF1";
	
	public ignoreResponse = false;
	
	protected limesurveyCredentials = null;
    
    constructor(protected translate: TranslateService, public surveySpecification: SurveySpecificationService, public responseConverter: ResponseConverterService, public limesurveyClientFactory: LimesurveyClientFactoryService, public limesurveyMappingProviderService: LimesurveyMappingProviderService, public scoreCalculator: ScoreCalculatorService){
        translate.setDefaultLang('en');
        
        this.source = this.parseSource();
        if (!this.source){
            console.error("No source detected, halting all");
            this.status = SurveyStatus.ERROR;
        }
        else console.log("Source detected", this.source);
        
        this.channel = this.parseChannel();
        console.log("Channel detected", this.channel);

		let limesurveyCredentials = new LimesurveyClientCredentials();
	    limesurveyCredentials.url = environment.limesurvey.api.url;
	    limesurveyCredentials.username = environment.limesurvey.api.username;
	    limesurveyCredentials.password = environment.limesurvey.api.password;
		this.limesurveyCredentials = limesurveyCredentials;
    }
    
    private parseSource(){
        // Admitted values
        let values = ['at', 'fr', 'de', 'it', 'si', 'ch'];
        
        // Parse
        let src = new URLSearchParams(window.location.search).get('src') || null;
        if (src){
            src = src.toLowerCase();
            if (values.indexOf(src) != -1){
                return src;
            }
            else {
                console.error("Source value not valid: ", src);
            }
        }
        else {
            console.error("No source defined");
        }
        
        return null;
    }
    
    private parseChannel(){
        // Parse
        return new URLSearchParams(window.location.search).get('channel') || null;
    }
    
    ngOnInit() {
        if (this.status != SurveyStatus.ERROR){
            let locale = 'en';
			switch (this.source){
				case 'de':
					locale = 'de';
					break;
				case 'at':
					locale = 'de-at';
					break;
				case 'ch':
					locale = 'de-ch';
					break;
				case 'it':
					locale = 'it';
					break;
				case 'fr':
					locale = 'fr';
					break;
				case 'si':
					locale = 'sl';
					break;
			}
            
            // Styling
            StylesManager.applyTheme( "bootstrap" );
            
            var survey = new Model(this.surveySpecification.getLocalizedModel(locale));
			survey.locale = locale;
            survey.onComplete.add((response) => {
                this.processResponse(response);
            });
            survey.onRendered.add((e) => {
                // Progress bar style
                let progressBars = document.getElementsByClassName('survey-progress');
                for (let i = 0; i < progressBars.length; i++){
                    let bar = <HTMLElement>(progressBars.item(i));
                    bar.style.width = "100%";
                    bar.parentElement.style.paddingLeft = "1.5rem";
                    bar.parentElement.style.paddingRight = "1.5rem";
                    
                    (<HTMLElement>(bar.firstElementChild)).style.margin = "0";
                }
            });
            survey.onCurrentPageChanged.add((e) => {
                // Scroll to top
                window.scrollTo(0, 0);
            });
            survey.showProgressBar = "top";
			survey.setVariable("source", this.source);
			
			// Hide questions which are normally shown when the user is located out of the pilot area
			let hiddenQuestions: IQuestion[] = [];
			survey.onValueChanging.add((s, q) => {
				if (q.name == this.pilotSelectionQuestion){
					for (let question of hiddenQuestions){
						question.visible = true;
					}
				}
			});
			survey.onValueChanged.add((s, q) => {
				if (q.name == this.pilotSelectionQuestion && this.isUserOutOfPilot(q.value)){
					for (let question of s.getAllQuestions(false)){
						if (question.name != this.pilotSelectionQuestion){
							if (question.visible){
								question.visible = false;
								hiddenQuestions.push(question);
							}
						}
					}
				}
			});
            
            // Doc: https://surveyjs.io/Examples/Library/?id=survey-customcss&platform=jQuery&theme=default
            SurveyNG.render( "surveyElement", {
                model: survey,
                css: {
                    pageDescription: "text-justify px-4 mb-3",
                    navigationButton: "btn",
                    navigation: {
                        next: "btn-primary"
                    },
                    question: {
                        mainRoot: "sv_qstn px-4",
                        title: "mb-4 mt-2"
                    },
                    progress: "progress center-block mx-auto mb-4 survey-progress"
                },
            });
            
            this.status = SurveyStatus.READY;
        }
    }

    private processResponse(response: any) {
        this.status = SurveyStatus.DONE;

        let responseData = response.data;
        console.log("Original response data", responseData);

		// Check if the response must be ignored due to the fact the the user is located out of the pilot
		this.ignoreResponse = this.isUserOutOfPilot(responseData[this.pilotSelectionQuestion]);
        
		if (!this.ignoreResponse){
	        // Calculate the score
	        this.score = this.scoreCalculator.calculate(responseData);
	        console.log("Score", this.score);
	        
	        // Convert to Limesurvey response
	        let surveyRegion = this.source;
	        let limesurveyAnswers = this.responseConverter.toLimesurveyResponse(responseData, surveyRegion);
	        
	        // Add the score to the hidden Limesurvey response
	        let surveyId = this.limesurveyMappingProviderService.getSurveyId(surveyRegion);
	        let scoreQuestionMapping = this.limesurveyMappingProviderService.getScoreQuestionMapping(surveyRegion);
	        limesurveyAnswers.setResponse(new LimesurveyAnswerCode(surveyId, scoreQuestionMapping.gid, scoreQuestionMapping.qid), this.score);
	        
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
	        this.limesurveyClientFactory.createClient(this.limesurveyCredentials).subscribe((limesurveyClient: LimesurveyClient) => {
	            console.log("Limesurvey client", limesurveyClient);
	            
	            // Add the survey response
	            limesurveyClient.addResponse(surveyId, limesurveyResponse).subscribe((responseId: number) => {
	                console.log("Limesurvey response ID", responseId);
	            }, (error) => {
	                console.error("Cannot add response", error);
	                this.surveyError = true;
	            });
	        }, (error) => {
	            console.error("Cannot authenticate with LimeSurvey platform", error);
	            this.surveyError = true;
	        });
		}
		else {
			console.warn("Ignoring response: user located out of pilot area [selectedArea, pilot]", responseData[this.pilotSelectionQuestion], this.source);
		}
    }
    
    public onPrivacyAcceptance(accepted: boolean){
        console.log('Privacy accepted', accepted);
        if (accepted){
            this.status = SurveyStatus.DOING;
        }
    }
	
	private isUserOutOfPilot(selectedArea: string): boolean {
		return ((selectedArea == "li" && this.source != 'at') || (selectedArea != "li" && selectedArea != this.source));
	}
	
	public isDevMode(): boolean {
		return isDevMode() || URI(window.location.href).hasQuery("mode", "dev");
	}
	
	public devAutoMapRegion = "it";
	public autoMap(){
		console.log("Building automatic mapping for pilot", this.devAutoMapRegion);
		
		let surveyId = this.limesurveyMappingProviderService.getSurveyId(this.devAutoMapRegion);
		console.log("Survey ID", surveyId);
		
		let scoreQuestionMapping = this.limesurveyMappingProviderService.getScoreQuestionMapping(this.devAutoMapRegion);
		console.log("Score question mapping", scoreQuestionMapping);
		
		let pilotSelectionQuestionMapping = {
			at: "1",
            fr: "2",
            de: "3",
            it: "4",
            fl: "5",
            si: "6",
            ch: "7"
		};
		console.log("Using default mapping for pilot selection question [question code, mapping]", this.pilotSelectionQuestion, pilotSelectionQuestionMapping);
		this.limesurveyClientFactory.createClient(this.limesurveyCredentials).subscribe((limesurveyClient: LimesurveyClient) => {
			limesurveyClient.getQuestionsIDs(surveyId).subscribe(questions => {
				let mapping = [];
				
				for (let code in questions){
					let qMapping = [code, questions[code]];
					if (code == this.pilotSelectionQuestion){
						qMapping[1].answers = pilotSelectionQuestionMapping;
					}
					mapping.push(qMapping);
				}
				
				console.log("Automapping result", JSON.stringify(mapping));
			});
		});
	}
    
}

enum SurveyStatus {
    
    LOADING = 'loading',
    ERROR = 'error',
    READY = 'ready',
    DOING = 'doing',
    DONE = 'done'
    
}
