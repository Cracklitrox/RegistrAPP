import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherPagePage } from './teacher-page.page';

describe('TeacherPagePage', () => {
  let component: TeacherPagePage;
  let fixture: ComponentFixture<TeacherPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeacherPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
