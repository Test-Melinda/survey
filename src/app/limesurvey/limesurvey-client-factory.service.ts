import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { LimesurveyClient } from "./limesurvey-client";

@Injectable({
  providedIn: 'root'
})
export class LimesurveyClientFactoryService {

  constructor(public httpClient: HttpClient) { }
  
  public createClient(credentials: LimesurveyClientCredentials): Observable<LimesurveyClient> {
      return new Observable<LimesurveyClient>((observer) => {
          // Get the session key for the new client
          this.httpClient.post(credentials.url, {
              method: "get_session_key",
              params: [credentials.username, credentials.password],
              id: 1
          }).subscribe((response: any) => {
              console.log("Limesurvey client creation response", response);
              
              if (!response){
                  observer.error(new Error("Cannot get session key: no response from Limesurvey"));
              }
              else if (response.error){
                  observer.error(new Error("Cannot get session key: " + response.error));
              }
              else if (!response.result){
                  observer.error(new Error("Cannot get session key: no session key in response from Limesurvey"));
              }
              else {
                  let client = new LimesurveyClient(credentials.url, response.result, this.httpClient);
                  
                  observer.next(client);
                  observer.complete();
              }
          }, (error) => {
              observer.error(new Error("Cannot get session key: cannot communicate with Limesurvey"));
              console.error("Limesurvey client creation error", error);
          });
      });
  }
  
}

export class LimesurveyClientCredentials {
    
    private _url: string;

    private _username: string;
    
    private _password: string;

    private _surveyId: number;
    
    public get url(): string {
        return this._url;
    }
    
    public set url(url: string){
        this._url = url;
    }
    
    public get username(): string{
        return this._username;
    }
    
    public set username(username: string){
        this._username = username;
    }
    
    public get password(): string {
        return this._password;
    }
    
    public set password(password: string){
        this._password = password;
    }

}
