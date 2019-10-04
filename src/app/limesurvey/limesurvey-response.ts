export class LimesurveyResponse {
    
    protected answers: Map<string, string> = new Map<string, string>();
    
    public constructor(){
    }
    
    public getResponse(questionCode: string, answerCode?: string): string {
        let code = questionCode;
        if (answerCode){
            code += answerCode;
        }
        
        return this.answers.get(code);
    }
    
    public setResponse(questionCode: string, answerCode: string = null, value: string){
        let code = questionCode;
        if (answerCode){
            code += answerCode;
        }
        
        this.answers.set(code, value);
    }
    
    public toResponseData(){
        let mapped = {};
        this.answers.forEach((value: string, key: string) => {
            mapped[key] = value;
        });
        
        return mapped;
    }
    
}
