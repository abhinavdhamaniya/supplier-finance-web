import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SupplierDto } from "../dto/SupplierDto";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private rootUrl = 'http://localhost:8081/suppliers';

    constructor(private http: HttpClient) { }

    public registerSupplier(supplier: SupplierDto): Observable<SupplierDto> {
        return this.http.post<SupplierDto>(this.rootUrl + '/register', supplier);
    }

    public loginSupplier(supplierLoginDetails: any): Observable<Boolean> {
        return this.http.post<Boolean>(this.rootUrl + '/login', supplierLoginDetails);
    }

    public getSupplierByCode(supplierCode: string): Observable<SupplierDto> {
        return this.http.get<SupplierDto>(this.rootUrl + '/' + supplierCode);
    }

    public getAllSuppliers(): Observable<SupplierDto[]> {
        return this.http.get<SupplierDto[]>(this.rootUrl);
    }
}