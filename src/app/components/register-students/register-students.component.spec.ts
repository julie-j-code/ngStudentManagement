import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentsComponent } from './register-students.component';

describe('RegisterStudentsComponent', () => {
  let component: RegisterStudentsComponent;
  let fixture: ComponentFixture<RegisterStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
