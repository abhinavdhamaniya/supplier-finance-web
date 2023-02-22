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

    public getInvoiceById(id: string): Observable<InvoiceDto[]> {
        return this.http.get<InvoiceDto[]>(this.rootUrl + '/' + id);
    }

    public getAllInvoicesByClientUsername(clientUsername: string): Observable<InvoiceDto[]> {
        return this.http.get<InvoiceDto[]>(this.rootUrl + '/clientUsername/' + clientUsername);
    }

    public getAllInvoicesBySupplierCode(supplierCode: string): Observable<InvoiceDto[]> {
        return this.http.get<InvoiceDto[]>(this.rootUrl + '/supplierCode/' + supplierCode);
    }

    public getAllInvoices(): Observable<InvoiceDto[]> {
        return this.http.get<InvoiceDto[]>(this.rootUrl);
    }
}