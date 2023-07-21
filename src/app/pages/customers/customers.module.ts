import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './customer-form/customer-form.component';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerFilterPipe } from 'src/app/pipes/customer-filter.pipe';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomersComponent,
    CustomersListComponent,
    CustomerFilterPipe
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
