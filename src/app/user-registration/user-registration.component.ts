import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClientDto } from '../dto/ClientDto';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  sub!: Subscription;
  errorMessage: String | null = null;
  sucessMessage: String | null = null;

  constructor(private clientService: ClientService) { }

  onClickSubmit(createClientForm: NgForm) {
    this.errorMessage = null;
    this.sucessMessage = null;
    var client = this.buildObject(createClientForm);
    this.sub = this.clientService.registerClient(client).subscribe({
      next: (response: any) => {
        this.sucessMessage = 'Client Registered!'
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = err.error.errors;
      }
    });
  }

  private buildObject(createClientForm: NgForm): ClientDto {
    var client: ClientDto = new ClientDto();
    var clientDetails = createClientForm.value;
    client.username = clientDetails.username;
    client.password = clientDetails.password;
    client.name = clientDetails.name;
    client.address = clientDetails.address;
    client.email = clientDetails.email;
    client.mobileNumber = clientDetails.mobileNumber;
    client.loanAccountNumber = clientDetails.loanAccountNumber;
    client.loanInformation = clientDetails.loanInformation;
    return client;
  }
}
