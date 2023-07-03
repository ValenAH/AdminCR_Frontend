import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {
    path:'',
    component: ProductsListComponent,
  },
  {
    path: 'crear',
    component: CreateProductComponent
  },
  {
    path: 'editar/:id',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
