import { Component, OnInit } from '@angular/core';
import { DateTimeNowService } from '../shared/date-time-now.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public todaysDate: Date;


  constructor(private dateTimeNowService: DateTimeNowService) { }

  ngOnInit() {

    this.showTodaysDate();
  }

  public showTodaysDate() {
    this.todaysDate = this.dateTimeNowService.getDateTimeNow();

  }


}
