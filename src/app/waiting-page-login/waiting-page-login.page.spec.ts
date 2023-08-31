import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitingPageLoginPage } from './waiting-page-login.page';

describe('WaitingPageLoginPage', () => {
  let component: WaitingPageLoginPage;
  let fixture: ComponentFixture<WaitingPageLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaitingPageLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
