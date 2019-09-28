import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping } from "./limesurvey-questions-mapping";
import { LimesurveyMappingProviderService } from "src/app/survey/limesurvey-mapping-provider.service";

@Injectable( {
    providedIn: 'root'
} )
export class ResponseConverterService {

    constructor( public limesurveyMappingProvider: LimesurveyMappingProviderService ) { }

    public toLimesurveyResponse( response: any, region: string ): any {
        // Get the survey questions mappings
        let mapping = this.limesurveyMappingProvider.getMapping( region );

        // Convert each response
        let mapped = {};
        for ( let rCode in response ) {
            // Map question code
            let limesurveyQuestionId = this.requireLimesurveyQuestionMapping(mapping, rCode);

            // Map answer(s) code(s)
            let answer = response[rCode];
            if ( Array.isArray( answer ) ) {
                for (let aCode of answer){
                    let aMapped = this.requireLimesurveyAnswerMapping(mapping, rCode, aCode);
                    mapped[limesurveyQuestionId + aMapped] = "Y";
                }
            }
            else {
                mapped[limesurveyQuestionId] = this.requireLimesurveyAnswerMapping(mapping, rCode, answer, true);
            }
        }

        return mapped;
    }

    protected requireLimesurveyQuestionMapping(mapping: LimesurveyQuestionsMapping, rCode: string): string {
        let limesurveyQuestionId = mapping.mapQuestion( rCode );
        if ( !limesurveyQuestionId ) {
            throw new Error( "Cannot map response to question '" + rCode + "'");
        }
        return limesurveyQuestionId;
    }
    
    protected requireLimesurveyAnswerMapping(mapping: LimesurveyQuestionsMapping, rCode: string, aCode: string, defaultSelf: boolean = false): string {
        let limesurveyAnswerId = mapping.mapAnswer( rCode, aCode );
        if (limesurveyAnswerId == null) {
            if (defaultSelf){
                limesurveyAnswerId = aCode;
            }
            else throw new Error( "Cannot map response to question '" + rCode + "': missing mapping for answer with code '" + aCode + "'");
        }
        return limesurveyAnswerId;
    }

}
