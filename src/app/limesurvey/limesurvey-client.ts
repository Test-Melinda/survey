
export class LimesurveyClient {
    
    private url: string;
    
    private sessionKey: string;

    constructor(url: string, sessionKey: string){
        this.setUrl(url);
        this.setSessionKey(sessionKey);
    }
    
    public getUrl(): string {
        return this.url;
    }
    
    protected setUrl(url: string) {
        this.url = url;
    }

    public getSessionKey(): string {
        return this.sessionKey;
    }
    
    protected setSessionKey(sessionKey: string) {
        this.sessionKey = sessionKey;
    }
    
    // TODO
    
}
