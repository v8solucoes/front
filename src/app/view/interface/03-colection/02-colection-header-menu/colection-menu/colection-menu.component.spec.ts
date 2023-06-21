import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionMenuComponent } from './colection-menu.component';

describe('ColectionMenuComponent', () => {
  let component: ColectionMenuComponent;
  let fixture: ComponentFixture<ColectionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
