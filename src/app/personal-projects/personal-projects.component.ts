import {Component, OnInit} from '@angular/core';
import {Portfolio} from "../shared/models/portfolio-model";
import {PortfolioService} from "../shared/services/portfolio.service";

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

  portfolioList: Portfolio[];

  constructor(private service: PortfolioService) {
  }

  ngOnInit() {
    this.service.getPortfolioList().subscribe((data) => {
      this.portfolioList = data;
    });
  }

}
