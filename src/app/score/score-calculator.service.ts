import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ScoreCalculatorService {

	constructor() { }

	public areScoreResponsesComplete(source: string, responseData: any, preCovid: boolean): boolean {
		let complete: boolean;
		if (preCovid){
			complete = (!!responseData.Q2 && !!responseData.Q3);
		}
		else {
			complete = (!!responseData.Q2Covid19 && !!responseData.Q3Covid19);
		}
		
		// For Swiss pilot, also Q8 and Q8 are taken into account
		if (source == 'ch'){
			complete = complete && !!responseData.Q8 && !!responseData.Q10;
		}
		
		return (
			complete &&
			(!!responseData.Q7dot1IT || !!responseData.Q7dot1AU || !!responseData.Q7dot1SL || !!responseData.Q7dot1SW || !!responseData.Q7dot1FR || !!responseData.Q7dot1GE) &&
			!!responseData.Q7dot2 &&
			!!responseData.Q7dot3
		);
	}
	
	public getScoreLevel(source: string, score: number): number {
		let lowLevel = 2;
		let mediumLevel = 5;
		
		if (source == 'ch'){
			lowLevel = 6;
			mediumLevel = 10;
		}
		
		if (score < lowLevel){
			return 1;
		}
		else if (score < mediumLevel){
			return 2;
		}
		else return 3;
	}

	public calculate(source: string, responseData: any, preCovid: boolean): number {
		let scores = {
			Q2: 0,
			Q3: 0,
			Q7_1: 0,
			Q7_2: 0,
			Q7_3: 0,
			Q8: 0,
			Q10: 0
		};

		// Question Q2
		let q = (preCovid)?responseData.Q2:responseData.Q2Covid19;
		if (q) {
			if (q.length == 1 && "7" in q){
				scores.Q2 = 0.5;
			}
			else if (("1" in q || "2" in q) && ("3" in q || "4" in q || "5" in q || "6" in q)) {
				scores.Q2 = 0.5;
			}
			else if ("5" in q || "6" in q) {
				scores.Q2 = 2;
			}
			else if ("3" in q || "4" in q) {
				scores.Q2 = 1;
			}
		}

		// Question Q3
		q = (preCovid)?responseData.Q3:responseData.Q3Covid19;
		if (q) {
			if (q == "3" || q == "4") {
				scores.Q3 = 4;
			}
			else if (q == "5" || q == "6") {
				scores.Q3 = 5;
			}
			if (q == "7") {
				scores.Q3 = 3;
			}
		}

		// Question Q7.1
		q = responseData.Q7dot1IT || responseData.Q7dot1AU || responseData.Q7dot1SL || responseData.Q7dot1SW || responseData.Q7dot1FR || responseData.Q7dot1GE;
		if (q == "3") {
			scores.Q7_1 = 1;
		}

		// Question Q7.2
		q = responseData.Q7dot2;
		if (q == "2") {
			scores.Q7_2 = 1;
		}

		// Question Q7.3
		q = responseData.Q7dot3;
		if (q == "2") {
			scores.Q7_3 = 1;
		}
		
		// Only for Swiss pilot
		if (source == 'ch'){
			// Question Q8
			q = responseData.Q8;
			if (q) {
				if ("1" in q || "9" in q) {
					scores.Q8 = 0.6;
				}
				else if ("2" in q || "3" in q || "4" in q || "5" in q || "6" in q || "7" in q || "8" in q) {
					scores.Q8 = 0.4;
				}
			}
	
			// Question Q10
			q = responseData.Q10;
			if (q && "8" in q) {
				scores.Q10 = -1;
			}
		}
		
		console.log("Answers scores", scores);

		return scores.Q2 + (scores.Q3 * 1.3) + (scores.Q7_1 * 0.5) + (scores.Q7_2 * 0.5) + (scores.Q7_3 * 0.5) + scores.Q8 + scores.Q10;
	}

}
