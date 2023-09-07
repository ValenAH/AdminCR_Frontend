import { HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListToken } from '@shared/constants/noTokenList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {


  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token: string = localStorage.getItem('token') || "";
    let request: HttpRequest<any> = req;
    const rejected: boolean = ListToken.BLACKLIST.some(e => request.url.includes(e));
    let headers = new HttpHeaders()
    .set('Type-content','aplication/json')

    if (token && !rejected) {
      headers.set('authorization', `Bearer ${token}`)
      request = req.clone({
        headers
      });
    }

    return next.handle(request)
  }
}
