import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClientDto } from "../dto/ClientDto";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private rootUrl = 'http://localhost:8081/clients';

    constructor(private http: HttpClient) { }

    public registerClient(client: ClientDto): Observable<ClientDto> {
        return this.http.post<ClientDto>(this.rootUrl + '/register', client);
    }

    public loginClient(clientLoginDetails: any): Observable<Boolean> {
        return this.http.post<Boolean>(this.rootUrl + '/login', clientLoginDetails);
    }

    public getClientByUsername(username: string): Observable<ClientDto> {
        return this.http.get<ClientDto>(this.rootUrl + '/' + username);
    }

    public getAllClients(): Observable<ClientDto[]> {
        return this.http.get<ClientDto[]>(this.rootUrl);
    }
}