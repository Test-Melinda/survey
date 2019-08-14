import { TestBed } from '@angular/core/testing';

import { LimesurveyMappingProviderService } from './limesurvey-mapping-provider.service';

describe('LimesurveyMappingProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LimesurveyMappingProviderService = TestBed.get(LimesurveyMappingProviderService);
    expect(service).toBeTruthy();
  });
});
