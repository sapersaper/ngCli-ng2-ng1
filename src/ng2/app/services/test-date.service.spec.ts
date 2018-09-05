import { TestBed, inject } from '@angular/core/testing';

import { TestDateService } from './test-date.service';

describe('TestDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDateService]
    });
  });

  it('should be created', inject([TestDateService], (service: TestDateService) => {
    expect(service).toBeTruthy();
  }));
});
