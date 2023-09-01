import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './customer-form/customer-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path:'',
    component: CustomersListComponent
  },
  {
    path: 'crear',
    component: CreateCustomerComponent
  },
  {
    path: 'editar/:id',
    component: CreateCustomerComponent
  },
  {
    path: 'historial',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
