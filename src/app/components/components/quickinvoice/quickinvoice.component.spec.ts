import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickinvoiceComponent } from './quickinvoice.component';

describe('QuickinvoiceComponent', () => {
  let component: QuickinvoiceComponent;
  let fixture: ComponentFixture<QuickinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickinvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
