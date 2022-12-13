import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SearchbarComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SearchbarComponent
  ]
})
export class SharedModule { }
