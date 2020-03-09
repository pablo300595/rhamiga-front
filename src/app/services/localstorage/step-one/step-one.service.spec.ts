import { TestBed } from '@angular/core/testing';

import { StepOneService } from './step-one.service';

describe('StepOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepOneService = TestBed.get(StepOneService);
    expect(service).toBeTruthy();
  });
});
