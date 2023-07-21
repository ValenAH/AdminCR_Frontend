import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
