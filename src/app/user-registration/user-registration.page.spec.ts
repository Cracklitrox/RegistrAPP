import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationPage } from './user-registration.page';

describe('UserRegistrationPage', () => {
  let component: UserRegistrationPage;
  let fixture: ComponentFixture<UserRegistrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
