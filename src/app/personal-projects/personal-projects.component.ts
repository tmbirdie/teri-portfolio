import {Component, OnInit} from '@angular/core';
import {Portfolio} from "../shared/models/portfolio-model";

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

  portfolioList: Portfolio[];

  constructor() {
  }

  ngOnInit() {
  }

}
