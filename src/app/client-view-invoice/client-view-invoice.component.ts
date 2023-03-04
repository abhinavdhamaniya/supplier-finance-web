import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InvoiceDto } from '../dto/InvoiceDto';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-client-view-invoice',
  templateUrl: './client-view-invoice.component.html',
  styleUrls: ['./client-view-invoice.component.css']
})
export class ClientViewInvoiceComponent implements OnInit {

  sub!: Subscription;
  loggedInUser: string = localStorage.getItem('LOGGED_IN_USER_ID')!;
  invoices: InvoiceDto[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loggedInUser = localStorage.getItem('LOGGED_IN_USER_ID')!;
    }, 1);
    this.sub = this.invoiceService.getAllInvoicesByClientUsername(this.loggedInUser).subscribe({
      next: (response: InvoiceDto[]) => {
        this.invoices = response;
      }
    });
  }

  downloadFile(invoiceFile: File | null): void {
    if(invoiceFile) {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(invoiceFile);
        downloadLink.download = invoiceFile.name;
        downloadLink.click();
    }
  }
}
