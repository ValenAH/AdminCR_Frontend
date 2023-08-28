import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { PaymentComponent } from './payment/payment.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';

const routes: Routes = [
  {
    path:'',
    component: SalesListComponent,
  },
  {
    path: 'crear',
    component: CreateSaleComponent
  },
  {
    path: 'detalle/:id',
    component: SaleDetailsComponent
  },
  {
    path: 'crear/registrar-pago',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
