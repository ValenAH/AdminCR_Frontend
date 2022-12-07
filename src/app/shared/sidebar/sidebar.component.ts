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
      path: '/inicio'
    },
    {
      number: '2',
      name: 'Usuarios',
      path: '/usuarios'
    },
    {
      number: '3',
      name: 'Productos',
      path: '/productos'
    },
    {
      number: '4',
      name: 'Clientes',
      path: '/clientes'
    },
    {
      number: '5',
      name: 'Ventas',
      path: '/ventas'
    },
    {
      number: '6',
      name: 'Cartera',
      path: '/cartera'
    },
    {
      number: '7',
      name: 'Reportes',
      path: '/reportes'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
