import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClientDto } from "../dto/ClientDto";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private rootUrl = 'http://localhost:8080/clients';

    constructor(private http: HttpClient) { }

    public registerClient(client: ClientDto): Observable<any> {
        return this.http.post<ClientDto>(this.rootUrl + '/register', client);
    }
}