import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  @Input() userLogged:string = '';

  sideNavStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
