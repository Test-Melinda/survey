import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping } from "./limesurvey-questions-mapping";
import { LimesurveyMappingProviderService } from "src/app/survey/limesurvey-mapping-provider.service";

@Injectable({
  providedIn: 'root'
})
export class ResponseConverterService {

  constructor(public limesurveyMappingProvider: LimesurveyMappingProviderService) { }
  
  public toLimesurveyResponse(response: any, region: string): any {
      // Get the survey questions mappings
      let mapping = this.limesurveyMappingProvider.getMapping(region);
      
      // TODO
      
      return null;
  }
  
}
