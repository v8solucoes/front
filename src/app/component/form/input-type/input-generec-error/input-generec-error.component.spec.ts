import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGenerecErrorComponent } from './input-generec-error.component';

describe('InputGenerecErrorComponent', () => {
  let component: InputGenerecErrorComponent;
  let fixture: ComponentFixture<InputGenerecErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGenerecErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGenerecErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
