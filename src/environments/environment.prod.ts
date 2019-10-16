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
            default: 463632,
            at: 987983,
            ch: 358845,
            de: 946374,
            fr: 951987,
            it: 218765,
            si: 957867
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
