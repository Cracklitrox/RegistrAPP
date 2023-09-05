import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistancePagePage } from './assistance-page.page';

describe('AssistancePagePage', () => {
  let component: AssistancePagePage;
  let fixture: ComponentFixture<AssistancePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssistancePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
