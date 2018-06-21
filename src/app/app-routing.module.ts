import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PersonalProjectsComponent} from './personal-projects/personal-projects.component';
import {ProfessionalProjectsComponent} from './professional-projects/professional-projects.component';
import {PersonalProjectsEditComponent} from './personal-projects/personal-projects-edit/personal-projects-edit.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'personal-projects', component: PersonalProjectsComponent},
  {path: 'personal-projects-edit/:id', component: PersonalProjectsEditComponent},
  {path: 'professional-projects', component: ProfessionalProjectsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
