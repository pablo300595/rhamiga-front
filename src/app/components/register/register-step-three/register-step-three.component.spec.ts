import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepThreeComponent } from './register-step-three.component';

describe('RegisterStepThreeComponent', () => {
  let component: RegisterStepThreeComponent;
  let fixture: ComponentFixture<RegisterStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
