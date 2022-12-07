import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http'

@Injectable({providedIn: 'root'})

export class AuthService {
  private _urlApi: string

  constructor(
    private http: HttpClient
  ){
    this._urlApi = environment.dev.url;
  }

  signUp(userName:string, password:string){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')

    return this.http.post(this._urlApi+ "Auth/Login", {UserName : userName,Password:password} ,{
      headers: header
    });
  }
}
