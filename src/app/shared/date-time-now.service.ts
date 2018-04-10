import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeNowService {

  constructor() { }

  public getDateTimeNow() {
    return new Date();
  }

}
