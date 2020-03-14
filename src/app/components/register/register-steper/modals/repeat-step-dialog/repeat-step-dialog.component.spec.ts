import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatStepDialogComponent } from './repeat-step-dialog.component';

describe('RepeatStepDialogComponent', () => {
  let component: RepeatStepDialogComponent;
  let fixture: ComponentFixture<RepeatStepDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatStepDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
