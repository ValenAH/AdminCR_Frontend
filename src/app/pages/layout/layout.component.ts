import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  showSidebar: boolean = false;


  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.getSidebarAction();
  }

  getSidebarAction(){
    this.sidebarService.sidebarAction$.subscribe(action =>{
      this.showSidebar = action;
    });
  }

  userLogged(e: any){
    console.log('Soy el usuario loggeado')
  }

}
