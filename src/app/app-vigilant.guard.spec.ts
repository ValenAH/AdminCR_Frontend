import { TestBed } from '@angular/core/testing';

import { AppVigilantGuard } from './app-vigilant.guard';

describe('AppGuardGuard', () => {
  let guard: AppVigilantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppVigilantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
