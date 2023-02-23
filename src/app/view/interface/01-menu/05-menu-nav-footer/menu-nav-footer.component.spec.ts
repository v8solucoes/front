import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavFooterComponent } from './menu-nav-footer.component';

describe('MenuNavFooterComponent', () => {
  let component: MenuNavFooterComponent;
  let fixture: ComponentFixture<MenuNavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
