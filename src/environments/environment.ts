
export const environment = {
    production: false,
	saveResult: true,
    limesurvey: {
        api: {
            url: "http://localhost/limesurvey/index.php/admin/remotecontrol",
            username: "admin",
            password: "admin"
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
				precovid: 'SCORE',
				postcovid: 'SCORE2'
			},
			channel: 'LINK',
			referrer: 'SOURCE'
        }
    }
};
