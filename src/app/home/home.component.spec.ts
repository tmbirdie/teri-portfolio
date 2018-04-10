import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { APP_BASE_HREF } from '@angular/common';
import { DateTimeNowService } from '../shared/date-time-now.service';
import { AppMaterialModules } from '../material.module';
import { AppComponent } from '../app.component';

export class DateTimeNowMockService {

}

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: DateTimeNowMockService;
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, HomeComponent, AboutMeComponent ],
      imports: [
        RouterModule.forRoot(routes), AppMaterialModules
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: DateTimeNowService, useValue: service }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'App' `, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render text in h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Teri Mathews');
  }));

});
