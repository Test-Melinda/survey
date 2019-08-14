import { Injectable } from '@angular/core';

const surveyModel = {
    "pages": [
        {
            "name": "filtering",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "FS_residence",
                    "title": "Country of residence",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "at",
                            "text": "Austria"
                        },
                        {
                            "value": "fr",
                            "text": "France"
                        },
                        {
                            "value": "de",
                            "text": "Germany"
                        },
                        {
                            "value": "it",
                            "text": "Italy"
                        },
                        {
                            "value": "fl",
                            "text": "Liechtenstein"
                        },
                        {
                            "value": "slo",
                            "text": "Slovenia"
                        },
                        {
                            "value": "ch",
                            "text": "Switzerland"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "FS_region_de",
                    "visible": false,
                    "visibleIf": "{FS_residence} = \"de\"",
                    "title": "Where do you live?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "bayern",
                            "text": "Bayern"
                        }
                    ]
                }
            ]
        }
    ]
};

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
