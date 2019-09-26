import { Injectable } from '@angular/core';

import { surveyModel } from './specs/survey';

@Injectable( {
    providedIn: 'root'
} )
export class SurveySpecificationService {
    
    private _model = surveyModel;

    constructor() { }

    public get model() {
        return this._model;
    }
    
    public getLocalizedModel( locale: string ) {
        let model = this.model;

        // TODO localization

        return model;
    }

}
