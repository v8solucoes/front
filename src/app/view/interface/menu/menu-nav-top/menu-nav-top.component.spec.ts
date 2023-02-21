import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavTopComponent } from './menu-nav-top.component';

describe('MenuNavTopComponent', () => {
  let component: MenuNavTopComponent;
  let fixture: ComponentFixture<MenuNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
