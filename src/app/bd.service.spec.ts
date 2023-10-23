import { TestBed } from '@angular/core/testing';

import { BdService } from './bd.service';

describe('BdService', () => {
  let service: BdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
