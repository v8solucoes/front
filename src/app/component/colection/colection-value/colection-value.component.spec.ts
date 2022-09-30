import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionValueComponent } from './colection-value.component';

describe('ColectionValueComponent', () => {
  let component: ColectionValueComponent;
  let fixture: ComponentFixture<ColectionValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
