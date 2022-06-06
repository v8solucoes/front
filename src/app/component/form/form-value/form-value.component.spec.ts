import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValueComponent } from './form-value.component';

describe('FormValueComponent', () => {
  let component: FormValueComponent;
  let fixture: ComponentFixture<FormValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
