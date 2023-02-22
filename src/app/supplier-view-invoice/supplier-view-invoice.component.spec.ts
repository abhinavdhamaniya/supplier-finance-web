import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierViewInvoiceComponent } from './supplier-view-invoice.component';

describe('SupplierViewInvoiceComponent', () => {
  let component: SupplierViewInvoiceComponent;
  let fixture: ComponentFixture<SupplierViewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierViewInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierViewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
