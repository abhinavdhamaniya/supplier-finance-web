import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InvoiceDto } from '../dto/InvoiceDto';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-user-upload-invoice',
  templateUrl: './user-upload-invoice.component.html',
  styleUrls: ['./user-upload-invoice.component.css']
})
export class UserUploadInvoiceComponent implements OnInit {

  sub!: Subscription;
  errorMessage: string | null = null;
  sucessMessage: string | null = null;
  loggedInUser: string = localStorage.getItem('LOGGED_IN_USER_ID')!;

  currency: string = 'USD';
  invoiceStatus = 'AWAITING';

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loggedInUser = localStorage.getItem('LOGGED_IN_USER_ID')!;
    }, 1);
  }

  onClickSubmit(uploadInvoiceForm: NgForm) {
    this.errorMessage = null;
    this.sucessMessage = null;
    var invoice = this.buildInvoice(uploadInvoiceForm);
    console.log(invoice);
    this.sub = this.invoiceService.saveInvoice(invoice).subscribe({
      next: (response: any) => {
        this.sucessMessage = 'Invoice Saved!'
      },
      error: (err: any) => {
        this.errorMessage = err.error.errors;
      }
    });
  }

  setCurrency(event: Event) {
    if (event.target) {
      this.currency = (event.target as HTMLTextAreaElement).value;
    }
  }

  private buildInvoice(uploadInvoiceForm: NgForm): InvoiceDto {
    var invoice: InvoiceDto = new InvoiceDto();
    var invoiceDetails = uploadInvoiceForm.value;
    invoice.id = invoiceDetails.invoiceId;
    invoice.clientUsername = this.loggedInUser;
    invoice.supplierCode = invoiceDetails.supplierCode;
    invoice.invoiceNumber = invoiceDetails.invoiceNumber;
    invoice.invoiceDate = invoiceDetails.invoiceDate;
    invoice.invoiceAmount = invoiceDetails.invoiceAmount;
    invoice.currency = this.currency;
    invoice.status = this.invoiceStatus;
    invoice.invoiceFile = invoiceDetails.invoiceFile;
    return invoice;
  }
}
