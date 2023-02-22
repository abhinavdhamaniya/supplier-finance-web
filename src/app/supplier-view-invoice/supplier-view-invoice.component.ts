import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InvoiceDto } from '../dto/InvoiceDto';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-supplier-view-invoice',
  templateUrl: './supplier-view-invoice.component.html',
  styleUrls: ['./supplier-view-invoice.component.css']
})
export class SupplierViewInvoiceComponent implements OnInit {

  sub!: Subscription;
  loggedInUser: string = localStorage.getItem('LOGGED_IN_USER_ID')!;
  invoices: InvoiceDto[] = [];
  filter: string | null = null;
  filterValue: string | null = null;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loggedInUser = localStorage.getItem('LOGGED_IN_USER_ID')!;
    }, 1);

    this.sub = this.invoiceService.getAllInvoices().subscribe({
      next: (response: InvoiceDto[]) => {
        this.invoices = response;
      }
    });
  }

  setFilter(event: Event) {
    if (event.target) {
      this.filter = (event.target as HTMLTextAreaElement).value;
    }
  }

  doFilter() {
    if (this.filterValue) {
      if (this.filter == 'CLIENT_USER_NAME') {
        this.sub = this.invoiceService.getAllInvoicesByClientUsername(this.filterValue).subscribe({
          next: (response: InvoiceDto[]) => {
            this.invoices = response;
          }
        });
      } else if (this.filter == 'SUPPLIER_CODE') {
        this.sub = this.invoiceService.getAllInvoicesBySupplierCode(this.filterValue).subscribe({
          next: (response: InvoiceDto[]) => {
            this.invoices = response;
          }
        });
      } else if (this.filter == 'INVOICE_ID') {
        this.sub = this.invoiceService.getInvoiceById(this.filterValue).subscribe({
          next: (response: InvoiceDto[]) => {
            this.invoices = response;
          }
        });
      }
    } else {
      this.sub = this.invoiceService.getAllInvoices().subscribe({
        next: (response: InvoiceDto[]) => {
          this.invoices = response;
        }
      });
    }
  }

}
