import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculatorService {

  constructor() { }
  
  public calculate(responseData: any): number {
      let scores = {
          Q2: 0,
          Q3: 0,
          Q6_1: 0,
          Q6_2: 0,
          Q6_3: 0,
          Q7: 0,
          Q9: 0
      }
      
      // Question Q2
      let q = responseData.Q2;
      if (q){
          if (("1" in q || "2" in q) && q.length > 1){
              scores.Q2 = 0.5;
          }
          else if ("3" in q || "4" in q){
              scores.Q2 = 1;
          }
          else if ("5" in q || "6" in q){
              scores.Q2 = 2;
          }
      }
      
      // Question Q3
      q = responseData.Q3;
      if (q){
          if (q == "3" || q == "4"){
              scores.Q3 = 4;
          }
          else if (q == "5" || q == "6"){
              scores.Q3 = 5;
          }
          if (q == "7"){
              scores.Q3 = 3;
          }
      }
      
      // Question Q6.1
      q = responseData.Q6dot1IT || responseData.Q6dot1AU || responseData.Q6dot1SL || responseData.Q6dot1SW || responseData.Q6dot1FR || responseData.Q6dot1GE;
      if (q == "3"){
          scores.Q6_1 = 1;
      }
      
      // Question Q6.2
      q = responseData.Q6dot2;
      if (q == "1"){
          scores.Q6_2 = 1;
      }
      
      // Question Q6.3
      q = responseData.Q6dot3;
      if (q == "A2"){
          scores.Q6_3 = 1;
      }
      
      // Question Q7
      q = responseData.Q7;
      if (q){
          if ("1" in q || "9" in q){
              scores.Q7 = 0.6;
          }
          else if ("2" in q || "3" in q || "4" in q || "5" in q || "6" in q || "7" in q || "8" in q){
              scores.Q2 = 0.4;
          }
      }
      
      // Question Q9
      q = responseData.Q9;
      if (q && "12" in q){
          scores.Q2 = -1;
      }
      
      console.log("Answers scores", scores);
      
      return scores.Q2 + (scores.Q3 * 1.3) + (scores.Q6_1 * 0.5) + (scores.Q6_2 * 0.5) + (scores.Q6_3 * 0.5) + scores.Q7 + scores.Q9;
  }
  
}
