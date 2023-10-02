import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualCredentialPage } from './virtual-credential.page';

describe('VirtualCredentialPage', () => {
  let component: VirtualCredentialPage;
  let fixture: ComponentFixture<VirtualCredentialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VirtualCredentialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
