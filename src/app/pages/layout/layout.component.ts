import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  sideNavStatus(e: any){
    console.log('Soy el evento del header'+ e)
  }

  userLogged(e: any){
    console.log('Soy el usuario loggeado')
  }

}
