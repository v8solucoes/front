import { TestBed } from '@angular/core/testing';

import { AccountCreateResolver } from './account-create.resolver';

describe('AccountCreateResolver', () => {
  let resolver: AccountCreateResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AccountCreateResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
