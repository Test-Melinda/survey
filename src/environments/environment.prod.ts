import { limesurveySettings } from './limesurvey-settings';

export const environment = {
    production: true,
    limesurvey: {
        api: {
            url: limesurveySettings.url,
            username: limesurveySettings.username,
            password: limesurveySettings.password
        },
        surveys: {
            default: 463632
        },
        metaQuestions: {
            score: {
                gid: 2321,
                qid: 45708
            },
            source: {
                gid: 2321,
                qid: 45708
            }
        }
    }
};
