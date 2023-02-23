import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavFooterComponent } from './dashboard-nav-footer.component';

describe('DashboardNavFooterComponent', () => {
  let component: DashboardNavFooterComponent;
  let fixture: ComponentFixture<DashboardNavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNavFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
