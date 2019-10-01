import { TestBed } from '@angular/core/testing';

import { ScoreCalculatorService } from './score-calculator.service';

describe('ScoreCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreCalculatorService = TestBed.get(ScoreCalculatorService);
    expect(service).toBeTruthy();
  });
});
