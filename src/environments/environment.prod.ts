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
            score: {
                default: {
                    gid: 2321,
                    qid: 45708
                },
                at: {
                    gid: 2499,
                    qid: 47787
                },
                ch: {
                    gid: 2518,
                    qid: 48005
                },
                de: {
                    gid: 2537,
                    qid: 48223
                },
                fr: {
                    gid: 2461,
                    qid: 47351
                },
                it: {
                    gid: 2556,
                    qid: 48441
                },
                si: {
                    gid: 2480,
                    qid: 47569
                }
            }
        }
    }
};
