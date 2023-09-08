import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  showSidebar: boolean = false;

  list = [
    {
      number: '1',
      name: 'Inicio',
      path: '/inicio',
      icon: 'icon fa-solid fa-house'
    },
    {
      number: '2',
      name: 'Usuarios',
      path: '/usuarios',
      icon: 'icon fa-solid fa-user'
    },
    {
      number: '3',
      name: 'Productos',
      path: '/productos',
      icon: 'icon fa-solid fa-cart-plus'
    },
    {
      number: '4',
      name: 'Clientes',
      path: '/clientes',
      icon: 'icon fa-solid fa-users'
    },
    {
      number: '5',
      name: 'Ventas',
      path: '/ventas',
      icon: 'icon fa-solid fa-sack-dollar'
    },
    {
      number: '6',
      name: 'Cartera',
      path: '/cartera',
      icon: 'icon fa-regular fa-credit-card'
    },
    {
      number: '7',
      name: 'Contabilidad',
      path: '/contabilidad',
      icon: 'bi bi-kanban-fill'
    },
    {
      number: '8',
      name: 'Reportes',
      path: '/reportes',
      icon: 'icon fa-solid fa-chart-column'
    }
  ]

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

}
