import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNavFooterComponent } from './document-nav-footer.component';

describe('DocumentNavFooterComponent', () => {
  let component: DocumentNavFooterComponent;
  let fixture: ComponentFixture<DocumentNavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentNavFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
