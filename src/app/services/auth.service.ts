import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, tap, map, catchError, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService {
  private _urlApi: string;
  private user = new BehaviorSubject<string>('');
  public userLogged$ = this.user.asObservable();

  constructor(
    private http: HttpClient
  ){
    this._urlApi = environment.dev.url;
  }

  signUp(userName:string, password:string){
    return this.http.post(`${this._urlApi}Auth/Login`, { UserName : userName,Password:password });
  }

  validateToken(): Observable<boolean>{
    return this.http.get(this._urlApi+ "Auth/AuthRoute").pipe(
      map(res => true),
      catchError(error => of(false))
    );
  }

  public sendUser(user: string){
    this.user.next(user);
  }
}
