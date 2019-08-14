import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping } from "./limesurvey-questions-mapping";

const mappings: {
    default: LimesurveyQuestionsMapping,
    at?: LimesurveyQuestionsMapping,
    de?: LimesurveyQuestionsMapping,
    fl?: LimesurveyQuestionsMapping,
    fr?: LimesurveyQuestionsMapping,
    it?: LimesurveyQuestionsMapping,
    slo?: LimesurveyQuestionsMapping,
    ch?: LimesurveyQuestionsMapping
} = {
    default: new LimesurveyQuestionsMapping(12345)
};

@Injectable({
  providedIn: 'root'
})
export class LimesurveyMappingProviderService {

  constructor() { }
  
  public getMapping(region: string){
      if (region in mappings){
          return mappings[region];
      }
      return mappings.default;
  }
  
}
