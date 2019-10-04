import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping, LimesurveyAnswerCode } from "./limesurvey-questions-mapping";
import { LimesurveyMappingProviderService } from "src/app/survey/limesurvey-mapping-provider.service";
import { LimesurveyResponse } from '../limesurvey/limesurvey-response';

@Injectable( {
    providedIn: 'root'
} )
export class ResponseConverterService {

    constructor( public limesurveyMappingProvider: LimesurveyMappingProviderService ) { }

    public toLimesurveyResponse( response: any, region: string ): LimesurveyResponse {
        // Get the survey questions mappings
        let mapping = this.limesurveyMappingProvider.getMapping( region );

        // Convert each response
        let mapped = new LimesurveyResponse();
        for ( let rCode in response ) {
            // Map question code
            let limesurveyQuestionId = this.requireLimesurveyQuestionMapping(mapping, rCode);
            
            // Map answer(s) code(s)
            let answer = response[rCode];
            if ( Array.isArray( answer ) ) {
                for (let aCode of answer){
                    limesurveyQuestionId.answerId = this.requireLimesurveyAnswerMapping(mapping, rCode, aCode, true);
                    mapped.setResponse(limesurveyQuestionId, "Y");
                }
            }
            else {
                mapped.setResponse(limesurveyQuestionId, this.requireLimesurveyAnswerMapping(mapping, rCode, answer, true));
            }
        }

        return mapped;
    }

    protected requireLimesurveyQuestionMapping(mapping: LimesurveyQuestionsMapping, rCode: string): LimesurveyAnswerCode {
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
