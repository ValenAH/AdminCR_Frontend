import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from '../../services/sidebar.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  userLogged: string = '';
  sidebarButton: boolean = false;
  menuStatus: boolean = true;

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUsername();
  }

  sideNavMove(){
    this.menuStatus = !this.menuStatus;
    this.sidebarService.sidebarAction(this.menuStatus);
  }

  getUsername(){
    this.authService.userLogged$.subscribe(user =>{
      this.userLogged = user;
    });
  }

  logout(){
    this.router.navigateByUrl('/iniciar-sesion')
  }

}
