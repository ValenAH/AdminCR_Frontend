import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map, catchError, of } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({providedIn: 'root'})

export class AuthService {
  private _urlApi: string;
  private user = new BehaviorSubject<string>('');
  public userLogged$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.userLogged$.pipe(map(Boolean));

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ){
    this._urlApi = environment.backend_url;
  }

  signUp(userName: string, password: string) {
    return this.http.post<any>(`${this._urlApi}Auth/Login`, { UserName: userName, Password: password }).pipe(
      tap((response) => {
        const token = response?.token ?? response?.data?.token ?? null;

        if (token) {
          this.tokenService.saveToken(token);
          this.sendUser(userName);
        }
      })
    );
  }

  validateToken(): Observable<boolean>{
    return this.http.get(this._urlApi + 'Auth/AuthRoute').pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  public sendUser(user: string){
    this.user.next(user);
  }

  logout(): void {
    this.tokenService.removeToken();
    this.sendUser('');
  }
}
