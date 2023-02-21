import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNavTopComponent } from './document-nav-top.component';

describe('DocumentNavTopComponent', () => {
  let component: DocumentNavTopComponent;
  let fixture: ComponentFixture<DocumentNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentNavTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
