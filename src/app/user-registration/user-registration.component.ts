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
  errorMessage: string | null = null;
  sucessMessage: string | null = null;
  userType: string = 'client';
  country: string = 'India';
  state: string = 'Karnataka';
  city: string = 'Bangalore';
  province: string = 'Koramangla';

  constructor(private clientService: ClientService) { }

  onClickSubmit(createClientForm: NgForm) {
    this.errorMessage = null;
    this.sucessMessage = null;
    var client = this.buildObject(createClientForm);
    console.log(client);
    this.sub = this.clientService.registerClient(client).subscribe({
      next: (response: any) => {
        this.sucessMessage = 'Client Registered!'
      },
      error: (err: any) => {
        this.errorMessage = err.error.errors;
      }
    });
  }

  setCountry(event: Event) {
    if(event.target) {
      this.country = (event.target as HTMLTextAreaElement).value;
    }
  }

  setState(event: Event) {
    if(event.target) {
      this.state = (event.target as HTMLTextAreaElement).value;
    }
  }

  setCity(event: Event) {
    if(event.target) {
      this.city = (event.target as HTMLTextAreaElement).value;
    }
  }

  setProvince(event: Event) {
    if(event.target) {
      this.province = (event.target as HTMLTextAreaElement).value;
    }
  }

  private buildObject(createClientForm: NgForm): ClientDto {
    var client: ClientDto = new ClientDto();
    var clientDetails = createClientForm.value;
    client.username = clientDetails.username;
    client.password = clientDetails.password;
    client.name = clientDetails.name;
    client.address = clientDetails.address;
    client.country = this.country;
    client.state = this.state;
    client.city = this.city;
    client.province = this.province;
    client.email = clientDetails.email;
    client.mobileNumber = clientDetails.mobileNumber;
    client.loanAccountNumber = clientDetails.loanAccountNumber;
    client.loanInformation = clientDetails.loanInformation;
    return client;
  }
}
