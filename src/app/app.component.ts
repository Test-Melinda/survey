import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager } from 'survey-angular';
import { SurveySpecificationService } from "src/app/survey/survey-specification.service";
import { ResponseConverterService } from "src/app/survey/response-converter.service";
import { LimesurveyQuestionsMapping } from "./survey/limesurvey-questions-mapping";

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    
    constructor(public surveySpecification: SurveySpecificationService, public responseConverter: ResponseConverterService){
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
        let limesurveyResponse = this.responseConverter.toLimesurveyResponse(responseData, surveyRegion);
        
        console.log("original", response.data);
        console.log("limesurvey", limesurveyResponse);
    }
}
