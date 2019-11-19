import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping } from "./limesurvey-questions-mapping";

import { environment } from '../../environments/environment';
import { mappings } from './specs/mappings';

@Injectable({
  providedIn: 'root'
})
export class LimesurveyMappingProviderService {

  constructor() { }
  
  public getMapping(region: string): LimesurveyQuestionsMapping {
      let mapping = mappings.get(region) || mappings.get('default');
      
      return new LimesurveyQuestionsMapping(this.getSurveyId(region), mapping);
  }
  
  public getSurveyId(region: string): number {
      let surveyId = environment.limesurvey.surveys.default;
      if (region in environment.limesurvey.surveys){
          surveyId = environment.limesurvey.surveys[region];
      }
      
      return surveyId;
  }
  
  public getScoreQuestionMapping(region: string): {
      gid: number,
      qid: number
  } {
      let mapping = environment.limesurvey.metaQuestions.score.default;
      if (region in environment.limesurvey.metaQuestions.score){
          mapping = environment.limesurvey.metaQuestions.score[region];
      }
      
      return mapping;
  }
  
}
