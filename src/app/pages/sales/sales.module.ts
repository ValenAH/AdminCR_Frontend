import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesListComponent } from './sales-list/sales-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';



@NgModule({
  declarations: [
    SalesComponent,
    CreateSaleComponent,
    SalesListComponent,
    CreateCustomerComponent,
    SaleDetailsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CreateSaleComponent
  ]
})
export class SalesModule { }
