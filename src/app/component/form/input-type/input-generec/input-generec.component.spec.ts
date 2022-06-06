import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGenerecComponent } from './input-generec.component';

describe('InputGenerecComponent', () => {
  let component: InputGenerecComponent;
  let fixture: ComponentFixture<InputGenerecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGenerecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGenerecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
