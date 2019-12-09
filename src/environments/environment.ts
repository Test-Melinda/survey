// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
                default: {
                    gid: 218,
                    qid: 1973
                },
				it: {
                    gid: 105,
                    qid: 843
                },
				ch: {
                    gid: 67,
                    qid: 561
                },
				de: {
                    gid: 198,
                    qid: 1754
                },
				at: {
                    gid: 237,
                    qid: 2191
                },
				si: {
                    gid: 153,
                    qid: 1299
                },
				fr: {
                    gid: 133,
                    qid: 1080
                }
            }
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
