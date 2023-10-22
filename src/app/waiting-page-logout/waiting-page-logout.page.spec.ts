import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitingPageLogoutPage } from './waiting-page-logout.page';

describe('WaitingPageLogoutPage', () => {
  let component: WaitingPageLogoutPage;
  let fixture: ComponentFixture<WaitingPageLogoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaitingPageLogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
