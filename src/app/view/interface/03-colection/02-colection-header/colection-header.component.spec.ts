import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionHeaderComponent } from './colection-header.component';

describe('ColectionHeaderComponent', () => {
  let component: ColectionHeaderComponent;
  let fixture: ComponentFixture<ColectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
