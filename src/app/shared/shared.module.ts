import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductFilterPipe } from 'src/app/pipes/product-filter.pipe';
import { OrderPanelComponent } from '../pages/sales/create-sale/order-panel/order-panel.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SearchbarComponent,
    PreloaderComponent,
    ErrorMessageComponent,
    ProductFilterPipe,
    InformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SearchbarComponent,
    PreloaderComponent,
    ErrorMessageComponent,
    ProductFilterPipe,
    InformationComponent
  ]
})
export class SharedModule { }
