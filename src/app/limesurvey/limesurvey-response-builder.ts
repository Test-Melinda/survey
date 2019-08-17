import * as moment from 'moment';

export class LimesurveyResponseBuilder {
    
    private _startDate: Date = null;

    private _datestamp: Date = null;

    private _startLanguage: string = null;
    
    private _responses: any = null;
    
    public get startDate(): Date {
        return this._startDate;
    }
    
    public set startDate(date: Date) {
        this._startDate = date;
    }
    
    public get datestamp(): Date {
        return this._datestamp;
    }
    
    public set datestamp(datestamp: Date) {
        this._datestamp = datestamp;
    }
    
    public get startLanguage(): string {
        return this._startLanguage;
    }
    
    public set startLanguage(lang: string) {
        this._startLanguage = lang;
    }
    
    public get responses(): any {
        return this._responses;
    }
    
    public set responses(responses: any){
        this._responses = responses;
    }
    
    public build(): any {
        let built: any = {};
        
        if (this.datestamp){
            built.datestamp = moment(this.datestamp).format('Y-MM-DD HH:mm:ss');
        }
        
        if (this.startDate){
            built.startdate = moment(this.startDate).format('Y-MM-DD HH:mm:ss');
        }
        
        if (this.startLanguage){
            built.startlanguage = this.startLanguage;
        }
        
        if (this.responses){
            for (let r in this.responses){
                built[r] = this.responses[r];
            }
        }
        
        return built;
    }
    
}
