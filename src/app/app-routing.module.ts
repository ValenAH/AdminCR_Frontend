import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SalesComponent } from './pages/sales/sales.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { AuthGuard } from './guards/app-vigilant.guard';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
{
  path: '',
  redirectTo:'iniciar-sesion',
  pathMatch:'full'
},
{
  path: 'iniciar-sesion', 
  loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
},
{
  path: '',
  component: LayoutComponent,
  // canLoad: [AuthGuard],
  children: [
    {
      path: 'inicio',
      component: HomeComponent,
      // canActivate: [AuthGuard],
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
      path: 'cartera',
      component: PortfolioComponent,
      loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
      data: {
        title: 'Cartera'
      }
    },
    {
      path: 'contabilidad',
      component: AccountingComponent,
      loadChildren: () => import('./pages/accounting/accounting.module').then(m => m.AccountingModule),
      data: {
        title: 'Contabilidad'
      }
    },
    {
      path: 'reportes',
      component: AccountingComponent,
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
