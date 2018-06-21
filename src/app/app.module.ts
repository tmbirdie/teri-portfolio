import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations/src/module";
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {PortfolioData} from "./shared/models/portfolio-data";

import {AppMaterialModules} from './material.module';
import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';
import {DateTimeNowService} from './shared/date-time-now.service';
import {PersonalProjectsComponent} from './personal-projects/personal-projects.component';
import {ProfessionalProjectsComponent} from './professional-projects/professional-projects.component';
import {PortfolioService} from "./shared/services/portfolio.service";
import {PersonalProjectsEditComponent} from './personal-projects/personal-projects-edit/personal-projects-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    HomeComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    PersonalProjectsComponent,
    ProfessionalProjectsComponent,
    PersonalProjectsEditComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(PortfolioData),
    AppMaterialModules, AppRoutingModule, HttpModule, HttpClientModule
  ],
  providers: [DateTimeNowService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
