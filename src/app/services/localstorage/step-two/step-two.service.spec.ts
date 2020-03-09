import { TestBed } from '@angular/core/testing';

import { StepTwoService } from './step-two.service';

describe('StepTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepTwoService = TestBed.get(StepTwoService);
    expect(service).toBeTruthy();
  });
});
