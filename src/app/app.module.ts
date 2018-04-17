import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModules } from './material.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { DateTimeNowService } from './shared/date-time-now.service';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ProfessionalProjectsComponent } from './professional-projects/professional-projects.component';


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
    ProfessionalProjectsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    AppMaterialModules, AppRoutingModule
  ],
  providers: [DateTimeNowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
