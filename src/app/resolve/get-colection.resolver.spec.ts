import { TestBed } from '@angular/core/testing';

import { GetColectionResolver } from './get-colection.resolver';

describe('GetColectionResolver', () => {
  let resolver: GetColectionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetColectionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
