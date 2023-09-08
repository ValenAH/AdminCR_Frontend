import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router : Router
    ){ }
  canLoad() : Observable< boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      map((isloggedIn)=>isloggedIn || this.router.createUrlTree(['/login']))
    );
  }
  
}
