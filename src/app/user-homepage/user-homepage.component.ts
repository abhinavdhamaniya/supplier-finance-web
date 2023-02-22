import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientDto } from '../dto/ClientDto';
import { SupplierDto } from '../dto/SupplierDto';
import { ClientService } from '../service/client.service';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  loggedInUser: string = localStorage.getItem('LOGGED_IN_USER_ID')!;
  loggedInUserType: string = localStorage.getItem('LOGGED_IN_USER_TYPE')!;

  sub!: Subscription;
  client: ClientDto | null = null;
  supplier: SupplierDto | null = null;

  constructor(private clientService: ClientService, private supplierService: SupplierService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loggedInUser = localStorage.getItem('LOGGED_IN_USER_ID')!;
      this.loggedInUserType = localStorage.getItem('LOGGED_IN_USER_TYPE')!;    
    }, 1);
    if(this.loggedInUserType == 'CLIENT') {
      this.sub = this.clientService.getClientByUsername(this.loggedInUser).subscribe({
        next: (response: any) => {
          this.client = response;
        }
      });
    } else {
      this.sub = this.supplierService.getSupplierByCode(this.loggedInUser).subscribe({
        next: (response: any) => {
          this.supplier = response;
        }
      });
    }
  }

}
