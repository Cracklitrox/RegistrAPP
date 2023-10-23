import { TestBed } from '@angular/core/testing';

import { RegistrAPPService } from './registr-app.service';

describe('RegistrAPPService', () => {
  let service: RegistrAPPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrAPPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
