export class LimesurveyQuestionsMapping {
    
    constructor(public surveyId: number, protected mapping = new Map<string, {
        gid: number,
        qid: number,
        answers: Map<string, string>
    }>()){
    }
    
    public setMapping(questionCode: string, gid: number, qid: number, answers: Map<string, string> = new Map()){
        this.mapping.set(questionCode, {
            gid: gid,
            qid: qid,
            answers: answers
        });
    }
    
    public setAnswerMapping(questionCode: string, answerCode: string, mapping: string){
        let questionMapping = this.mapping.get(questionCode);
        if (!questionMapping){
            throw new Error("Question code unknown: " + questionCode);
        }
        
        questionMapping.answers.set(answerCode, mapping);
        
        this.mapping.set(questionCode, questionMapping);
    }
    
    public mapQuestion(questionCode: string): string {
        let questionMapping = this.mapping.get(questionCode);
        if (questionMapping){
            return (this.surveyId + "X" + questionMapping.gid + "X" + questionMapping.qid);
        }
        return null;
    }
    
    public mapAnswer(questionCode: string, answerCode: string): string {
        let questionMapping = this.mapping.get(questionCode);
        if (questionMapping){
            return questionMapping.answers.get(answerCode);
        }
        return null;
    }
    
}
