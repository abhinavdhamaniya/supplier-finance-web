import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientService } from '../service/client.service';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  sub!: Subscription;
  errorMessage: string | null = null;
  sucessMessage: string | null = null;
  userType: string = 'client';

  constructor(private clientService: ClientService, private supplierService: SupplierService, private router: Router) { }

  onClickSubmit(form: NgForm) {
    this.errorMessage = null;
    this.sucessMessage = null;

    if (this.userType == 'client') {
      var clientLoginDetails = {
        username: form.value.username,
        password: form.value.password
      };
      this.sub = this.clientService.loginClient(clientLoginDetails).subscribe({
        next: (response: Boolean) => {
          if(!response) {
            this.errorMessage = 'Invalid login credentials';
          } else {
            this.errorMessage = null;
            localStorage.setItem('LOGGED_IN_USER_TYPE', "CLIENT");
            localStorage.setItem('LOGGED_IN_USER_ID', clientLoginDetails.username);
            this.router.navigate(['user-homepage'])
          }
        },
        error: (err: any) => {
          this.errorMessage = err.error.errors;
        }
      });
    } else {
      var supplierLoginDetails = {
        supplierCode: form.value.supplierCode,
        password: form.value.password
      };
      this.sub = this.supplierService.loginSupplier(supplierLoginDetails).subscribe({
        next: (response: Boolean) => {
          console.log(response);
          if(!response) {
            this.errorMessage = 'Invalid login credentials';
          } else {
            this.errorMessage = null;
            localStorage.setItem('LOGGED_IN_USER_TYPE', "SUPPLIER");
            localStorage.setItem('LOGGED_IN_USER_ID', supplierLoginDetails.supplierCode);
          }
        },
        error: (err: any) => {
          this.errorMessage = err.error.errors;
        }
      });
    }
  }
}
