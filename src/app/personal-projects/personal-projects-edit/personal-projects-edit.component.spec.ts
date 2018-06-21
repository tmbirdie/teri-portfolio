import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectsEditComponent } from './personal-projects-edit.component';

describe('PersonalProjectsEditComponent', () => {
  let component: PersonalProjectsEditComponent;
  let fixture: ComponentFixture<PersonalProjectsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
