import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InvoiceDto } from "../dto/InvoiceDto";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    private rootUrl = 'http://localhost:8081/invoices';

    constructor(private http: HttpClient) { }

    public saveInvoice(invoice: InvoiceDto): Observable<InvoiceDto> {
        return this.http.post<InvoiceDto>(this.rootUrl + '/save', invoice);
    }

    public uploadInvoiceFile(invoiceFile: File, invoiceId: string): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('invoiceFile', invoiceFile);
        return this.http.post<any>(this.rootUrl + '/upload-invoice/' + invoiceId, formData);
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

    public updateInvoiceStatus(status: string, invoiceId: string): Observable<InvoiceDto> {
        return this.http.get<InvoiceDto>(this.rootUrl+ '/update/' + invoiceId + '?status=' + status);
    }
}