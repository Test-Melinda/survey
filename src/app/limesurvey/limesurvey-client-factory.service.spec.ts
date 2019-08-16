import { TestBed } from '@angular/core/testing';

import { LimesurveyClientFactoryService } from './limesurvey-client-factory.service';

describe('LimesurveyClientFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LimesurveyClientFactoryService = TestBed.get(LimesurveyClientFactoryService);
    expect(service).toBeTruthy();
  });
});
