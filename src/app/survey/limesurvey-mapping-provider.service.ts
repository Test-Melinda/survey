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
    default: new LimesurveyQuestionsMapping(123248, new Map([
        ["FS_residence", {
            gid: 1,
            qid: 1,
            answers: new Map([
                ["at", "a1"],
                ["fr", "a2"],
                ["de", "a3"],
                ["it", "a4"],
                ["fl", "a5"],
                ["slo", "a6"],
                ["ch", "a7"]
            ])
        }],
        ["FS_region_de", {
            gid: 1,
            qid: 9,
            answers: new Map([
                ["bayern", "a1"]
            ])
        }]
    ]))
};

@Injectable({
  providedIn: 'root'
})
export class LimesurveyMappingProviderService {

  constructor() { }
  
  public getMapping(region: string): LimesurveyQuestionsMapping {
      if (region in mappings){
          return mappings[region];
      }
      return mappings.default;
  }
  
}
