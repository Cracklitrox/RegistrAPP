import { TestBed } from '@angular/core/testing';

import { DisavowedStudentGuard } from './disavowed-student.guard';

describe('DisavowedStudentGuard', () => {
  let guard: DisavowedStudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DisavowedStudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
