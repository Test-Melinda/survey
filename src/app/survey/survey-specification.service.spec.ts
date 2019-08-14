import { TestBed } from '@angular/core/testing';

import { SurveySpecificationService } from './survey-specification.service';

describe('SurveySpecificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveySpecificationService = TestBed.get(SurveySpecificationService);
    expect(service).toBeTruthy();
  });
});
