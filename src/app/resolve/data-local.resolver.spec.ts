import { TestBed } from '@angular/core/testing';

import { DataLocalResolver } from './data-local.resolver';

describe('DataLocalResolver', () => {
  let resolver: DataLocalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DataLocalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
