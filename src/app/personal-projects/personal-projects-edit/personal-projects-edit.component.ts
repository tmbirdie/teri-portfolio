import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {PortfolioService} from "../../shared/services/portfolio.service";
import {Portfolio} from "../../shared/models/portfolio-model";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-personal-projects-edit',
  templateUrl: './personal-projects-edit.component.html',
  styleUrls: ['./personal-projects-edit.component.scss']
})
export class PersonalProjectsEditComponent implements OnInit {
  pageTitle: string = 'Portfolio Edit';
  portfolioForm: FormGroup;
  portfolio: Portfolio;
  errorMessage: string;
  id: number;
  addMode = false;

  private validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private portfolioService: PortfolioService) {

    this.validationMessages = {
      description: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      company: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];

    });

    this.portfolioForm = this.fb.group({
      description: '',
      projectType: '',
      company: '',
      starRating: ''
    });

    this.portfolioService.getPortfolioItem(this.id).subscribe((data) => {
      this.portfolio = data;

      this.portfolioForm.patchValue({
        description: this.portfolio.description,
        projectType: this.portfolio.projectType,
        company: this.portfolio.company,
        starRating: this.portfolio.starRating
      });

    });

  }

  updatePortfolio(portfolio: Portfolio) {
    let p = Object.assign({}, this.portfolio, this.portfolioForm.value);

    this.portfolioService.updatePortfolioItem(p)
      .subscribe(
        () => this.onSaveComplete(),
        (error: any) => "I am an error"
    );
  }

  onSaveComplete() {
    this.portfolioForm.reset();
    this.router.navigate(['personal-projects']);
  }




}
