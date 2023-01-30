import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionIndexComponent } from './colection-index.component';

describe('ColectionIndexComponent', () => {
  let component: ColectionIndexComponent;
  let fixture: ComponentFixture<ColectionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
