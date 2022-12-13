import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Inicio',
      path: '/inicio',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'Usuarios',
      path: '/usuarios',
      icon: 'fa-solid fa-user'
    },
    {
      number: '3',
      name: 'Productos',
      path: '/productos',
      icon: 'fa-solid fa-cart-plus'
    },
    {
      number: '4',
      name: 'Clientes',
      path: '/clientes',
      icon: 'fa-solid fa-users'
    },
    {
      number: '5',
      name: 'Ventas',
      path: '/ventas',
      icon: 'fa-solid fa-sack-dollar'
    },
    {
      number: '6',
      name: 'Cartera',
      path: '/cartera',
      icon: 'fa-regular fa-credit-card'
    },
    {
      number: '7',
      name: 'Reportes',
      path: '/reportes',
      icon: 'fa-solid fa-chart-column'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
