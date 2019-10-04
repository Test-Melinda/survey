import { LimesurveyAnswerCode } from '../survey/limesurvey-questions-mapping';

export class LimesurveyResponse {
    
    protected answers: Map<string, string|number> = new Map<string, string|number>();
    
    public constructor(){
    }
    
    public setResponse(questionCode: LimesurveyAnswerCode, value: string|number){
        this.answers.set(questionCode.toCode(), value);
    }
    
    public toResponseData(){
        let mapped = {};
        this.answers.forEach((value: string, key: string) => {
            mapped[key] = value;
        });
        
        return mapped;
    }
    
}
