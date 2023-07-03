import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../common/models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _urlApi: string;

  constructor(
    private http: HttpClient
  ) {
    this._urlApi = environment.dev.url;
   }

   getProducts(){
    return this.http.get(`${this._urlApi}Product/GetProducts`)
   }

   getProductById(productId : number){
    let product = {
      productId: productId
    }
    return this.http.post(`${this._urlApi}Product/GetProductById`, product)
   }

   saveProduct(product: Product){
    return this.http.post(`${this._urlApi}Product/SaveProduct`,product)
   }

   updateProduct(product: Product){
    return this.http.post(`${this._urlApi}Product/SaveProduct`,product)
   }

}
