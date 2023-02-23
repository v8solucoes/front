import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavTopComponent } from './dashboard-nav-top.component';

describe('DashboardNavTopComponent', () => {
  let component: DashboardNavTopComponent;
  let fixture: ComponentFixture<DashboardNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNavTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
