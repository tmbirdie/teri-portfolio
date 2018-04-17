import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DateTimeNowService } from './date-time-now.service';


fdescribe('DateTimeNowService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],
      providers: [
        DateTimeNowService
      ],
    }).compileComponents().then(() => {
    });
  });

  it('should be created', inject([DateTimeNowService], (service: DateTimeNowService) => {
    expect(service).toBeTruthy();
  }));



});
