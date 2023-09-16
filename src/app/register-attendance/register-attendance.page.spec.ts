import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterAttendancePage } from './register-attendance.page';

describe('RegisterAttendancePage', () => {
  let component: RegisterAttendancePage;
  let fixture: ComponentFixture<RegisterAttendancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
