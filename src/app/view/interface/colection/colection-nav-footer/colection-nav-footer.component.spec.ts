import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionNavFooterComponent } from './colection-nav-footer.component';

describe('ColectionNavFooterComponent', () => {
  let component: ColectionNavFooterComponent;
  let fixture: ComponentFixture<ColectionNavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionNavFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
