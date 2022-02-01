import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStudentsComponent } from './login-students.component';

describe('LoginStudentsComponent', () => {
  let component: LoginStudentsComponent;
  let fixture: ComponentFixture<LoginStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
