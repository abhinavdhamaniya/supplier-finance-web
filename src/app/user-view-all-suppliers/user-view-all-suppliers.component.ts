import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientDto } from '../dto/ClientDto';
import { SupplierDto } from '../dto/SupplierDto';
import { ClientService } from '../service/client.service';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-user-view-all-suppliers',
  templateUrl: './user-view-all-suppliers.component.html',
  styleUrls: ['./user-view-all-suppliers.component.css']
})
export class UserViewAllSuppliersComponent implements OnInit {

  sub!: Subscription;
  suppliers: SupplierDto[] = [];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {

    this.sub = this.supplierService.getAllSuppliers().subscribe({
      next: (response: SupplierDto[]) => {
        this.suppliers = response;
      }
    });
  }
}
