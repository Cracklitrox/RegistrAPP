import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionNotesPage } from './description-notes.page';

describe('DescriptionNotesPage', () => {
  let component: DescriptionNotesPage;
  let fixture: ComponentFixture<DescriptionNotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescriptionNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
