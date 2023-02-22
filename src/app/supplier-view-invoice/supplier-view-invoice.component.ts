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

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {

    setInterval(() => {
      this.loggedInUser = localStorage.getItem('LOGGED_IN_USER_ID')!;
      this.sub = this.invoiceService.getAllInvoices().subscribe({
        next: (response: InvoiceDto[]) => {
          this.invoices = response;
        }
      });
    }, 1);
  }

}
