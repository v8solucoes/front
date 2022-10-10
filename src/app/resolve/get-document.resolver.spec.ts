import { TestBed } from '@angular/core/testing';

import { GetDocumentResolver } from './get-document.resolver';

describe('GetDocumentResolver', () => {
  let resolver: GetDocumentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetDocumentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
