import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SalesComponent } from './pages/sales/sales.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { AppVigilantGuard } from './app-vigilant.guard';

const routes: Routes = [
{
  path: '',
  redirectTo:'iniciar-sesion',
  pathMatch:'full'
},
{
  path: 'iniciar-sesion', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
},
{
  path: '',
  component: LayoutComponent,
  canActivate: [AppVigilantGuard],
  data: { title: 'Inicio' },
  children: [
    {
      path: 'inicio',
      component: HomeComponent,
      canActivate: [AppVigilantGuard],
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      data: {
        title: 'Inicio'
      }
    },
    {
      path: 'usuarios',
      component: UsersComponent,
      loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
      data: {
        title: 'Usuarios'
      }
    },
    {
      path: 'productos',
      component: ProductsComponent,
      loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
      data: {
        title: 'Productos'
      }
    },
    {
      path: 'clientes',
      component: CustomersComponent,
      loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule),
      data: {
        title: 'Clientes'
      }
    },
    {
      path: 'ventas',
      component: SalesComponent,
      loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule),
      data: {
        title: 'Ventas'
      }
    },
    {
      path: 'reportes',
      component: SalesComponent,
      loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule),
      data: {
        title: 'Reportes'
      }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
