import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Input() userLogged = '';

  @Output() sideNavButton = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideNavMove(){
    this.menuStatus = !this.menuStatus;
    this.sideNavButton.emit(this.menuStatus);
    console.log(this.menuStatus);
  }

}
