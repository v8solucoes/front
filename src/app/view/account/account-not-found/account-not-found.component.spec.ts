import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotFoundComponent } from './account-not-found.component';

describe('AccountNotFoundComponent', () => {
  let component: AccountNotFoundComponent;
  let fixture: ComponentFixture<AccountNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
