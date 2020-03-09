import { TestBed } from '@angular/core/testing';

import { StepThreeService } from './step-three.service';

describe('StepThreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepThreeService = TestBed.get(StepThreeService);
    expect(service).toBeTruthy();
  });
});
