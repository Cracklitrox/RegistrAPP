import { TestBed } from '@angular/core/testing';

import { AuthorizedStudentGuard } from './authorized-student.guard';

describe('AuthorizedStudentGuard', () => {
  let guard: AuthorizedStudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizedStudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
