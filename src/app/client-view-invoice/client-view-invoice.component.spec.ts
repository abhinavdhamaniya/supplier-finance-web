import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewInvoiceComponent } from './client-view-invoice.component';

describe('ClientViewInvoiceComponent', () => {
  let component: ClientViewInvoiceComponent;
  let fixture: ComponentFixture<ClientViewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientViewInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
