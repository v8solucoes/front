import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionGroupComponent } from './colection-group.component';

describe('ColectionGroupComponent', () => {
  let component: ColectionGroupComponent;
  let fixture: ComponentFixture<ColectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
