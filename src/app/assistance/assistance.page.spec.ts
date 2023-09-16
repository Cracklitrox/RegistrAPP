import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistancePage } from './assistance.page';

describe('AssistancePage', () => {
  let component: AssistancePage;
  let fixture: ComponentFixture<AssistancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
