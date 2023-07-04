import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomersComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CustomersModule { }
