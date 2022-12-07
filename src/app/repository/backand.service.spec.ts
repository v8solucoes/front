import { TestBed } from '@angular/core/testing';

import { BackandService } from './backand.service';

describe('BackandService', () => {
  let service: BackandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
