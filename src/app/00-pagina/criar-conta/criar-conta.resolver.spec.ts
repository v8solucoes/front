import { TestBed } from '@angular/core/testing';

import { CriarContaResolver } from './criar-conta.resolver';

describe('CriarContaResolver', () => {
  let resolver: CriarContaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CriarContaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
