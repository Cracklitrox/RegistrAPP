import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalNotesPage } from './total-notes.page';

describe('TotalNotesPage', () => {
  let component: TotalNotesPage;
  let fixture: ComponentFixture<TotalNotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TotalNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
