import { Component } from '@angular/core';
import {
Router,
Event as RouterEvent,
NavigationStart,
NavigationEnd,
NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AdminCR';

  loader: boolean = true;

  constructor(
    private router: Router
  ){
    this.router.events.subscribe((e: RouterEvent) =>{
      this.navigationInterceptor(e);
    })
  }

  navigationInterceptor(event: RouterEvent){
    if (event instanceof NavigationStart) {
      this.loader = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() =>{
        this.loader = false;
      }, 2000)
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() =>{
        this.loader = true;
      }, 2000)
    }
  }
}
