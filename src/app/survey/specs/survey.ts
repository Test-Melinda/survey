// Survey definition
export const surveyModel = {
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
        },
        {
            "name": "common",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "CS_activities",
                    "title": "In [the pilot area] do you usually carry out any of the following activities?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "EQ_1",
                            "text": "Work/business"
                        },
                        {
                            "value": "EQ_2",
                            "text": "Study"
                        },
                        {
                            "value": "EQ_3",
                            "text": "Shopping"
                        },
                        {
                            "value": "EQ_4",
                            "text": "Leisure activities (free time)"
                        },
                        {
                            "value": "EQ_5",
                            "text": "Other"
                        }
                    ]
                }
            ]
        }
    ]
};
