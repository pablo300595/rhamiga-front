import { TestBed } from '@angular/core/testing';

import { StepFourService } from './step-four.service';

describe('StepFourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepFourService = TestBed.get(StepFourService);
    expect(service).toBeTruthy();
  });
});
