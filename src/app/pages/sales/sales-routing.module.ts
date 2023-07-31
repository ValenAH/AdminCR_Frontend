import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { PaymentComponent } from './payment/payment.component';

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
    path: 'editar/:id',
    component: CreateSaleComponent
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
