import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientDto } from '../dto/ClientDto';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-user-view-all-clients',
  templateUrl: './user-view-all-clients.component.html',
  styleUrls: ['./user-view-all-clients.component.css']
})
export class UserViewAllClientsComponent implements OnInit {

  sub!: Subscription;
  clients: ClientDto[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.sub = this.clientService.getAllClients().subscribe({
      next: (response: ClientDto[]) => {
        this.clients = response;
      }
    });
  }
}
