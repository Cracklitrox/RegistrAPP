import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitingPageWelcomeUserPage } from './waiting-page-welcome-user.page';

describe('WaitingPageWelcomeUserPage', () => {
  let component: WaitingPageWelcomeUserPage;
  let fixture: ComponentFixture<WaitingPageWelcomeUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaitingPageWelcomeUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
