import { TestBed, inject } from '@angular/core/testing';

import { DateTimeNowService } from './date-time-now.service';

describe('DateTimeNowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateTimeNowService]
    });
  });

  it('should be created', inject([DateTimeNowService], (service: DateTimeNowService) => {
    expect(service).toBeTruthy();
  }));


});
