import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSteperComponent } from './register-steper.component';

describe('RegisterSteperComponent', () => {
  let component: RegisterSteperComponent;
  let fixture: ComponentFixture<RegisterSteperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSteperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
