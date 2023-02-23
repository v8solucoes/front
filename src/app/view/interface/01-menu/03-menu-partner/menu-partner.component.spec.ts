import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPartnerComponent } from './menu-partner.component';

describe('MenuPartnerComponent', () => {
  let component: MenuPartnerComponent;
  let fixture: ComponentFixture<MenuPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
