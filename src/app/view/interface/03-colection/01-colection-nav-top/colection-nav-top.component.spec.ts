import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionNavTopComponent } from './colection-nav-top.component';

describe('ColectionNavTopComponent', () => {
  let component: ColectionNavTopComponent;
  let fixture: ComponentFixture<ColectionNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionNavTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
