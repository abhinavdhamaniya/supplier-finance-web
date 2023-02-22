import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClientDto } from '../dto/ClientDto';
import { SupplierDto } from '../dto/SupplierDto';
import { ClientService } from '../service/client.service';
import { SupplierService } from '../service/supplier.service';

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

  constructor(private clientService: ClientService, private supplierService: SupplierService) { }

  onClickSubmit(createClientForm: NgForm) {
    this.errorMessage = null;
    this.sucessMessage = null;
    if (this.userType == 'client') {
      var client = this.buildClient(createClientForm);
      this.sub = this.clientService.registerClient(client).subscribe({
        next: (response: any) => {
          this.sucessMessage = 'Client Registered!'
        },
        error: (err: any) => {
          this.errorMessage = err.error.errors;
        }
      });
    } else {
      var supplier = this.buildSupplier(createClientForm);
      this.sub = this.supplierService.registerSupplier(supplier).subscribe({
        next: (response: any) => {
          this.sucessMessage = 'Supplier Registered!'
        },
        error: (err: any) => {
          this.errorMessage = err.error.errors;
        }
      });
    }
  }

  setCountry(event: Event) {
    if (event.target) {
      this.country = (event.target as HTMLTextAreaElement).value;
    }
  }

  setState(event: Event) {
    if (event.target) {
      this.state = (event.target as HTMLTextAreaElement).value;
    }
  }

  setCity(event: Event) {
    if (event.target) {
      this.city = (event.target as HTMLTextAreaElement).value;
    }
  }

  setProvince(event: Event) {
    if (event.target) {
      this.province = (event.target as HTMLTextAreaElement).value;
    }
  }

  private buildClient(createClientForm: NgForm): ClientDto {
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

  private buildSupplier(createClientForm: NgForm): SupplierDto {
    var supplier: SupplierDto = new SupplierDto();
    var supplierDetails = createClientForm.value;
    supplier.supplierCode = supplierDetails.supplierCode;
    supplier.password = supplierDetails.password;
    supplier.name = supplierDetails.name;
    supplier.address = supplierDetails.address;
    supplier.country = this.country;
    supplier.state = this.state;
    supplier.city = this.city;
    supplier.province = this.province;
    supplier.email = supplierDetails.email;
    supplier.mobileNumber = supplierDetails.mobileNumber;
    supplier.creditAccountNumber = supplierDetails.creditAccountNumber;
    supplier.creditInformation = supplierDetails.creditInformation;
    return supplier;
  }
}
