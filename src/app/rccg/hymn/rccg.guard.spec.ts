import { TestBed } from '@angular/core/testing';

import { RccgGuard } from './rccg/hymn/rccg.guard';

describe('RccgGuard', () => {
  let guard: RccgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RccgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
