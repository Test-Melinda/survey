import { limesurveySettings } from './limesurvey-settings';

export const environment = {
    production: true,
	saveResult: true,
    limesurvey: {
        api: {
            url: limesurveySettings.url,
            username: limesurveySettings.username,
            password: limesurveySettings.password
        },
        surveys: {
            default: 463632,
            at: 122333,
            ch: 643939,
            de: 163671,
            fr: 776434,
            it: 991375,
            si: 966913
        },
        metaQuestions: {
            score: 'SCORE',
			channel: 'LINK'
        }
    }
};
