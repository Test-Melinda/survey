import { TestBed } from '@angular/core/testing';

import { ResponseConverterService } from './response-converter.service';

describe('ResponseConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseConverterService = TestBed.get(ResponseConverterService);
    expect(service).toBeTruthy();
  });
});
