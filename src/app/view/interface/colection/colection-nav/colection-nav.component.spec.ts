import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionNavComponent } from './colection-nav.component';

describe('ColectionNavComponent', () => {
  let component: ColectionNavComponent;
  let fixture: ComponentFixture<ColectionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
