import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InvoiceDto } from "../dto/InvoiceDto";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    private rootUrl = 'http://localhost:8080/invoices';

    constructor(private http: HttpClient) { }

    public saveInvoice(invoice: InvoiceDto): Observable<InvoiceDto> {
        return this.http.post<InvoiceDto>(this.rootUrl + '/save', invoice);
    }
}