import { TestBed } from '@angular/core/testing';

import { SteperService } from './steper.service';

describe('SteperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SteperService = TestBed.get(SteperService);
    expect(service).toBeTruthy();
  });
});
