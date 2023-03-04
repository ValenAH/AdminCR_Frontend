import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../common/models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _urlApi : string
  constructor(
    private http : HttpClient
  ) {
    this._urlApi = environment.dev.url;
  }

  getProductById(productId: string){
    return this.http.post(`${this._urlApi}`,productId)
  }

}
