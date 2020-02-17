import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepTwoComponent } from './register-step-two.component';

describe('RegisterStepTwoComponent', () => {
  let component: RegisterStepTwoComponent;
  let fixture: ComponentFixture<RegisterStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
