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
            at: 987983,
            ch: 358845,
            de: 946374,
            fr: 951987,
            it: 218765,
            si: 957867
        },
        metaQuestions: {
            score: {
                default: {
                    gid: 2321,
                    qid: 45708
                },
                at: {
                    gid: 2395,
                    qid: 46367
                },
                ch: {
                    gid: 2377,
                    qid: 46168
                },
                de: {
                    gid: 2359,
                    qid: 45969
                },
                fr: {
                    gid: 2431,
                    qid: 46765
                },
                it: {
                    gid: 2341,
                    qid: 45770
                },
                si: {
                    gid: 2413,
                    qid: 46566
                }
            }
        }
    }
};
