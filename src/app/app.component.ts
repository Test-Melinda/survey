import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager, Survey, IQuestion, surveyLocalization } from 'survey-angular';
import { SurveySpecificationService } from "src/app/survey/survey-specification.service";
import { ResponseConverterService } from "src/app/survey/response-converter.service";
import { LimesurveyResponseBuilder } from "./limesurvey/limesurvey-response-builder";
import { LimesurveyClientFactoryService, LimesurveyClientCredentials } from "src/app/limesurvey/limesurvey-client-factory.service";
import { ScoreCalculatorService } from "./score/score-calculator.service";
import { isDevMode } from '@angular/core';
import * as URI from 'urijs';
import 'url-search-params-polyfill';

import { environment } from '../environments/environment';
import { LimesurveyMappingProviderService } from './survey/limesurvey-mapping-provider.service';
import { TranslateService } from '@ngx-translate/core';
import { LimesurveyClient } from './limesurvey/limesurvey-client';

import { slovenianSurveyStrings } from './i18n/surveyjs/slovenian';
import { austrianGermanSurveyStrings } from './i18n/surveyjs/austrian-german';
import { swissGermanSurveyStrings } from './i18n/surveyjs/swiss-german';
import { Title } from '@angular/platform-browser';
import * as showdown from 'showdown';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    
    public source = null;
    protected channel = null;
    
    public SurveyStatus = SurveyStatus;
    public status: SurveyStatus = SurveyStatus.LOADING;
    public responseSaveError = false;
	
	public startTime = null;
    
    public score = null;
	public scoreValid = false;

	private pilotSelectionQuestion = "QF1";
	
	public ignoreResponse = false;
	
	protected limesurveyCredentials = null;
	
	private surveyStateAutoSaveJobID = null;
	private autoSaveSchedulingInterval = 10;
	
	private queryParams: Map<string, string> = null;
    
    constructor(public translate: TranslateService, public surveySpecification: SurveySpecificationService, public responseConverter: ResponseConverterService, public limesurveyClientFactory: LimesurveyClientFactoryService, public limesurveyMappingProviderService: LimesurveyMappingProviderService, public scoreCalculator: ScoreCalculatorService, protected titleService: Title){
        translate.setDefaultLang('en');
        
        this.source = this.parseSource();
        if (!this.source){
            console.error("No source detected, halting all");
            this.status = SurveyStatus.ERROR;
        }
        else console.log("Source detected", this.source);
        
        this.channel = this.parseChannel();
        console.log("Channel detected", this.channel);
		
		// Set locale
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
		this.translate.use(locale);
		
		// Page title
		this.translate.get("APP.TITLE").subscribe(t => { this.titleService.setTitle(t); });
		
		// LimeSurvey credentials
		let limesurveyCredentials = new LimesurveyClientCredentials();
	    limesurveyCredentials.url = environment.limesurvey.api.url;
	    limesurveyCredentials.username = environment.limesurvey.api.username;
	    limesurveyCredentials.password = environment.limesurvey.api.password;
		this.limesurveyCredentials = limesurveyCredentials;
		
		// Add surveyjs translationss
		surveyLocalization.locales["sl"] = slovenianSurveyStrings;
		surveyLocalization.localeNames["sl"] = "slovenian";
		surveyLocalization.locales["de-at"] = austrianGermanSurveyStrings;
		surveyLocalization.localeNames["de-at"] = "austrian german";
		surveyLocalization.locales["de-ch"] = swissGermanSurveyStrings;
		surveyLocalization.localeNames["de-ch"] = "swiss german";
    }

	private parseQueryParams(): Map<string, string> {
		if (!this.queryParams){
			this.queryParams = new Map<string, string>();
			new URLSearchParams(window.location.search).forEach((value, name) => {
				this.queryParams.set(name.toLowerCase(), value);
			});
		}
		
		return this.queryParams;
    }
    
    private parseSource(): string {
        // Admitted values
        let values = ['at', 'fr', 'de', 'it', 'si', 'ch'];
        
        // Parse
		let src = this.parseQueryParams().get('src') || null;
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
    
    private parseChannel(): string {
        // Parse
        return this.parseQueryParams().get('channel') || null;
    }
    
    public ngOnInit() {
        if (this.status != SurveyStatus.ERROR){
            // Styling
            StylesManager.applyTheme("bootstrap");
			
            var survey = new Model(this.surveySpecification.getLocalizedModel(this.translate.currentLang));
			survey.locale = this.translate.currentLang;
			survey.requiredText = "";
			survey.showQuestionNumbers = "off";
			survey.showProgressBar = "top";
			survey.showPageNumbers = false;
			
			// Handle survey completion
            survey.onComplete.add((response) => {
				this.status = SurveyStatus.DONE;
				
				// Save survey state and cancel auto-save job
				this.saveSurveyState(survey).then();
				clearInterval(this.surveyStateAutoSaveJobID);
				
				// Process and save responses
                this.processResponse(response).then((response) => {
					this.responseSaveError = false;
				}, (error) => {
					this.responseSaveError = true;
					
					// Save current state so that the user can retry after reloading
					this.saveSurveyState(survey);
				});
				
				// Scroll to top
                window.scrollTo(0, 0);
            });
			
			// Add margins to the progress bar
            survey.onRendered.add((e) => {
                // Progress bar style
                let progressBars = document.getElementsByClassName('survey-progress');
                for (let i = 0; i < progressBars.length; i++){
                    let bar = <HTMLElement>(progressBars.item(i));
                    bar.style.width = "100%";
                    bar.parentElement.style.paddingLeft = "1.5rem";
                    bar.parentElement.style.paddingRight = "1.5rem";
                    
                    (<HTMLElement>(bar.firstElementChild)).style.margin = "0";
					
					// Get the bar level
					let level = bar.getElementsByClassName('progress-bar').item(0);
					// Hide the page number
					level.getElementsByTagName('span').item(0).style.display = 'none';
                }
            });
			
			// Hide pilot selection question for slovenian pilot
			survey.onAfterRenderQuestion.add((survey, question) => {
				if (question.question.name == this.pilotSelectionQuestion && this.source == 'si'){
					question.htmlElement.style.display = 'none';
				}
			});
			// Fix questions style
			survey.onAfterRenderQuestion.add((survey, question) => {
				// Make titles bolder
				let titles = question.htmlElement.getElementsByClassName('text-bold');
				for (let i = 0; i < titles.length; i++){
					let h5 = <HTMLElement>(titles.item(i));
					h5.style.fontWeight = "700";
					h5.style.fontSize = "1.1rem";
				}
				
				// Fix descriptions
				let descriptions = question.htmlElement.getElementsByClassName('q-description');
				if (descriptions.length > 0){
					let description = descriptions.item(0);
					description.style.marginTop = "-1em";
					description.style.marginBottom = "1em";
					description.style.fontSize = "90%";
				}
				
				// Fix line-height of options labels
				let labels = question.htmlElement.getElementsByTagName('label');
				for (let i = 0; i < labels.length; i++){
					let label = <HTMLElement>(labels.item(i));
					label.style.lineHeight = "1.4";
				}
				
				// Add labels over question columns of PSq3 and fix visualization for mobile
				if (question.question.name == "PSq3"){
					let matrixHeads = question.htmlElement.getElementsByTagName('thead');
					if (matrixHeads.length > 0){
						let head = <HTMLElement>(matrixHeads.item(0));
						let labels = head.getElementsByTagName('th');
						
						for (let i = 0; i < labels.length; i++){
							let label = labels.item(i);
							label.style.fontSize = '0.8rem';
							
							if (i == 0){
								label.prepend(document.createElement('br'));
								let text = document.createElement('span');
								text.innerText = "ni urejeno";
								text.style.textTransform = 'uppercase';
								text.style.fontSize = '1rem';
								label.prepend(text);
							}
							else if (i == labels.length - 1){
								label.prepend(document.createElement('br'));
								let text = document.createElement('span');
								text.innerText = "dobro urejeno";
								text.style.textTransform = 'uppercase';
								text.style.fontSize = '1rem';
								label.prepend(text);
							}
						}
					}
					
					let rows = question.htmlElement.getElementsByTagName('tbody').item(0).getElementsByTagName('tr');
					for (let i = 0; i < rows.length; i++){
						let row = <HTMLElement>rows.item(i);
						row.className = row.className + ' mb-4';
						
						let labels = row.getElementsByTagName('td');
						
						if (labels.length > 0){
							labels.item(0).className += ' xs-bg-gray-200 xs-text-bold';
						}
						
						if (labels.length > 1){
							let captions = labels.item(1).getElementsByTagName('label');
							if (captions.length > 0){
								let text = document.createElement('span');
								text.className = 'd-sm-none';
								text.innerText = " (ni urejeno)";
								text.style.marginLeft = '1rem';
								(<HTMLElement>captions.item(0)).append(text);
							}
						}
						if (labels.length > 2){
							let captions = labels.item(labels.length - 1).getElementsByTagName('label');
							if (captions.length > 0){
								let text = document.createElement('span');
								text.innerText = " (dobro urejeno)";
								text.className = 'd-sm-none';
								text.style.marginLeft = '1rem';
								(<HTMLElement>captions.item(0)).append(text);
							}
						}
					}
				}
				
				// Spacing of last 2 options of S2Q7
				if (question.question.name == "S2Q7"){
					let options = question.htmlElement.getElementsByClassName('radio');
					if (options.length > 1){
						(<HTMLElement>(options.item(options.length - 2))).className = (<HTMLElement>(options.item(options.length - 2))).className + " mt-2";
					}
				}
			});
			
			// Scrolls up on page change
            survey.onCurrentPageChanged.add((survey: Survey) => {
                // Scroll to top
                window.scrollTo(0, 0);
				
				// Save state
				this.saveSurveyState(survey);
            });
			
			// Handle hiding of questions which are normally shown when the user is located out of the pilot area
			survey.onValueChanging.add((s: Survey, q) => {
				if (q.name == this.pilotSelectionQuestion){
					this.showQuestions(s);
				}
			});
			survey.onValueChanged.add((s: Survey, q) => {
				if (q.name == this.pilotSelectionQuestion && this.isUserOutOfPilot(q.value)){
					this.hideQuestions(s);
				}
			});
			
			// Create showdown markdown converter
			var converter = new showdown.Converter({
				underline: true
			});
			survey
			    .onTextMarkdown
			    .add((survey: Survey, options) => {
			        // Convert the mardown text to html
			        var str = converter.makeHtml(options.text);
			        // Remove root paragraphs <p></p>
			        str = str.substring(3);
			        str = str.substring(0, str.length - 4);
			        // Set html
			        options.html = str;
			    });
			
			// Reset errors for some specific questions to avoid showing them before that the user clicks to go to the next page
			survey.onValueChanged.add((s, q) => {
				if (["PS4dot2", "PS4dot10", "PS4dot11", "PS4dot12", "PS4dot14", "PS4dot15"].indexOf(q.name) != -1){
					q.question.errors = [];
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
                        title: "mb-4 mt-2 text-bold",
						description: "q-description"
                    },
                    progress: "progress center-block mx-auto mb-4 survey-progress"
                },
            });

			// Set the source as a survey variable
			survey.setValue("source", this.source);
			
			// Preselect the country in case of slovenian pilot and hide country selection
			if (this.source == 'si'){
				survey.setValue(this.pilotSelectionQuestion, this.source);
				//survey.getQuestionByName(this.this.pilotSelectionQuestion).visible = false; // Cannot do this otherwise the response data are not returned... don't know why???
            }
			
			// Reload any saved response, if available, and then schedule auto-save of survey state every 10 seconds
			this.loadState(survey).then((state) => {
				this.scheduleAutoSave(survey, this.autoSaveSchedulingInterval);
				
				// Restore status to let the user go directly to the question where it left the survey
				if (state.status === SurveyStatus.DOING || state.status === SurveyStatus.DONE){
					this.status = SurveyStatus.DOING;
				}
			}, (error) => {
				this.scheduleAutoSave(survey, this.autoSaveSchedulingInterval);
			});
			
			
            this.status = SurveyStatus.READY;
        }
    }

	// Hide questions which are normally shown when the user is located out of the pilot area
	private hiddenQuestions: IQuestion[] = [];
	private hideQuestions(survey: Survey){
		for (let question of survey.getAllQuestions(false)){
				if (question.name != this.pilotSelectionQuestion){
					if (question.visible){
						question.visible = false;
						this.hiddenQuestions.push(question);
					}
				}
			}
	}
	private showQuestions(survey: Survey){
		for (let question of this.hiddenQuestions){
			question.visible = true;
		}
	}

	private scheduleAutoSave(survey: Survey, interval: number){
		this.surveyStateAutoSaveJobID = window.setInterval(() => {
			this.saveSurveyState(survey);
		}, interval * 1000);
	}
	
    private processResponse(response: any): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			// Get responses
	        let responseData = response.data;
	        console.log("Original response data", responseData);
	
			// Check if the response must be ignored due to the fact the the user is located out of the pilot
			this.ignoreResponse = this.isUserOutOfPilot(responseData[this.pilotSelectionQuestion]);
	        
			if (!this.ignoreResponse){
				// Ignore added variables
				delete responseData.source;
				
		        // Calculate the score
		        this.score = this.scoreCalculator.calculate(responseData);
				this.scoreValid = this.scoreCalculator.areScoreResponsesComplete(responseData);
		        console.log("Score (valid?)", this.score, this.scoreValid);
				
				// Add the score channel to the responses
				responseData[environment.limesurvey.metaQuestions.score] = this.score;
				
				// Add the source channel to the responses
				if (this.channel){
					responseData[environment.limesurvey.metaQuestions.channel] = this.channel;
				}
				
		        // Convert to Limesurvey response
		        let surveyRegion = this.source;
		        let limesurveyResponseData = this.responseConverter.toLimesurveyResponse(responseData, surveyRegion, !this.isDevMode()).toResponseData();
		        console.log("Limesurvey response data", limesurveyResponseData);
		        
		        // Build the full response information
		        let builder = new LimesurveyResponseBuilder();
		        builder.datestamp = new Date();
		        builder.startDate = this.startTime;
		        builder.startLanguage = this.translate.currentLang;
		        builder.responses = limesurveyResponseData;
		        let limesurveyResponse = builder.build();
		        
		        console.log("Full limesurvey response data", limesurveyResponse);
		        
				if (!!environment.saveResult){
			        let surveyId = this.limesurveyMappingProviderService.getSurveyId(surveyRegion);
			        // Create the client to communicate with Limesurvey
			        this.limesurveyClientFactory.createClient(this.limesurveyCredentials).subscribe((limesurveyClient: LimesurveyClient) => {
			            console.log("Limesurvey client", limesurveyClient);
			            
			            // Add the survey response
			            limesurveyClient.addResponse(surveyId, limesurveyResponse).subscribe((responseId: number) => {
			                console.log("Limesurvey response ID", responseId);
							resolve({
								response: responseData,
								limesurveyResponse: limesurveyResponse,
							});
			            }, (error) => {
			                console.error("Cannot add response to LimeSurvery", error);
							reject("Cannot save response");
			            });
			        }, (error) => {
			            console.error("Cannot authenticate with LimeSurvey platform", error);
			            reject("Cannot save response");
			        });
				}
				else {
					console.warn("Results not saved as stated by configuration options");
					resolve({
						response: responseData,
						limesurveyResponse: limesurveyResponse,
					});
				}
			}
			else {
				console.warn("Ignoring response: user located out of pilot area [selectedArea, pilot]", responseData[this.pilotSelectionQuestion], this.source);
				resolve({
					response: responseData,
					limesurveyResponse: null,
				});
			}
		});
    }

	public retry(){
		// Reload to retry
		window.location.reload();
	}
    
    public onPrivacyAcceptance(accepted: boolean){
        console.log('Privacy accepted', accepted);
        if (accepted){
            this.status = SurveyStatus.DOING;
			this.startTime = new Date();
        }
    }
	
	private isUserOutOfPilot(selectedArea: string): boolean {
		let out: boolean = (selectedArea != this.source);
		if (this.source == "at"){
			out = (["li", "de", "at", "ch"].indexOf(selectedArea) == -1);
		}
		
		return out;
	}
	
	private surveyStateStorageItem = 'surveyState';
	private saveSurveyState(survey: Survey): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			if (typeof(window.localStorage) !== 'undefined'){
				let state = {
					status: this.status,
					channel: this.channel,
					startTime: this.startTime,
					responses: survey.data,
					pageNum: survey.currentPageNo,
					responseSaveError: this.responseSaveError
				};
				
				console.log("Saving survey state", state);
				
				window.localStorage.setItem(this.surveyStateStorageItem, JSON.stringify(state));
				
				resolve(state);
			}
			else {
				reject("Storage not available");
			}
		});
	}
	
	private loadState(survey: Survey): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			if (typeof(window.localStorage) !== 'undefined'){
				// Load saved state from local storage
			    var state = JSON.parse(window.localStorage.getItem(this.surveyStateStorageItem) || null);
				
				console.log("Loading survey state", state);
				if (state){
					// Load saved data only if the source is the same
					if (typeof(state.responses) === 'object' && this.source === state.responses.source){
						// Reload only if the survey was left in the middle, or if the response processing failed (so that the user doesn't have to respond again)
						if (state.status === SurveyStatus.DOING || (state.status === SurveyStatus.DONE && state.responseSaveError === true)){
							// Restore start time
							this.startTime = state.startTime || null;
							
							// Restore channel
							this.channel = state.channel || null;
							
							// Restore responses
							survey.data = state.responses;
							
							// Trigger questions hiding when the user is out of pilot
							if (this.pilotSelectionQuestion in state.responses && this.isUserOutOfPilot(state.responses[this.pilotSelectionQuestion])){
								this.hideQuestions(survey);
							}
							
							// If it's a retry after a saving error show the survey from the start, but all answers are already selected
							if (state.responseSaveError){
								survey.currentPageNo = 0;
							}
							// Else change to the the last viewed page
							else if (typeof(state.pageNum) === 'number' && state.pageNum >= 0){
								survey.currentPageNo = state.pageNum;
							}
							
							resolve(state);
						}
						else reject("Ingnoring saved response due to save survey status: " + state.status);
					}
					else reject("No responses to load or different source");
				}
				else reject("No valid state saved");
			}
			else reject("Local storage not available");
		});
    }
	
	public isDevMode(): boolean {
		return isDevMode() || URI(window.location.href).hasQuery("mode", "dev");
	}
	
	public devAutoMapRegion = "";
	public autoMap(){
		if (!this.devAutoMapRegion){
			this.devAutoMapRegion = null;
		}
		console.log("Building automatic mapping for pilot", this.devAutoMapRegion);
		
		let surveyId = this.limesurveyMappingProviderService.getSurveyId(this.devAutoMapRegion);
		console.log("Survey ID", surveyId);
		
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
				
				console.log("Automapping result (copy and paste the following JSON into the corresponding mapping file)");
				console.log(JSON.stringify(mapping));
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

