import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SupplierDto } from "../dto/SupplierDto";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private rootUrl = 'http://localhost:8080/suppliers';

    constructor(private http: HttpClient) { }

    public registerSupplier(supplier: SupplierDto): Observable<any> {
        return this.http.post<SupplierDto>(this.rootUrl + '/register', supplier);
    }
}