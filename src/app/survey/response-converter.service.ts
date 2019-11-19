import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping, LimesurveyAnswerCode } from "./limesurvey-questions-mapping";
import { LimesurveyMappingProviderService } from "src/app/survey/limesurvey-mapping-provider.service";
import { LimesurveyResponse } from '../limesurvey/limesurvey-response';

@Injectable( {
    providedIn: 'root'
} )
export class ResponseConverterService {
	
	public otherOptionSuffix = '-Comment';

    constructor( public limesurveyMappingProvider: LimesurveyMappingProviderService ) { }

    public toLimesurveyResponse( response: any, region: string ): LimesurveyResponse {
        // Get the survey questions mappings
        let mapping = this.limesurveyMappingProvider.getMapping( region );

        // Convert each response
        let mapped = new LimesurveyResponse();
        for ( let rCode in response ) {
			// Detect comment of option "Other"
			let otherOption = false;
			if (rCode.endsWith(this.otherOptionSuffix)){
				otherOption = true;
				rCode = rCode.replace(this.otherOptionSuffix, '');
			}
			
            // Map question code
            let limesurveyQuestionId = this.requireLimesurveyQuestionMapping(mapping, rCode);
            
			// Map answer
			if (otherOption){
				limesurveyQuestionId.answerId = 'other';
				mapped.setResponse(limesurveyQuestionId, response[rCode + this.otherOptionSuffix]);
			}
			else {
				let answer = response[rCode];
				
	            // Map answer(s) code(s)
	            if ( Array.isArray( answer ) ) {
	                for (let aCode of answer){
						if (aCode != 'other' || !((rCode + this.otherOptionSuffix) in response)){
							limesurveyQuestionId.answerId = this.requireLimesurveyAnswerMapping(mapping, rCode, aCode, true);
	                    	mapped.setResponse(limesurveyQuestionId, "Y");
						}
	                }
	            }
				else if (typeof(answer) === 'object'){
					for (let aCode in answer){
						limesurveyQuestionId.answerId = this.requireLimesurveyAnswerMapping(mapping, rCode, aCode, true);
						mapped.setResponse(limesurveyQuestionId, answer[aCode]);
					}
				}
	            else {
					if (answer != 'other' || !((rCode + this.otherOptionSuffix) in response)){
	                	mapped.setResponse(limesurveyQuestionId, this.requireLimesurveyAnswerMapping(mapping, rCode, answer, true));
					}
	            }
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
