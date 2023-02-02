import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionFooterComponent } from './colection-footer.component';

describe('ColectionFooterComponent', () => {
  let component: ColectionFooterComponent;
  let fixture: ComponentFixture<ColectionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
