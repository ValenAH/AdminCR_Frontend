import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private _urlApi: string;

  constructor(
    private http: HttpClient
  ) {
    this._urlApi = environment.dev.url;
   }

   getSales(){
    return this.http.get(`${this._urlApi}Sale/GetSales`)
   }
   getSaleDetails(saleId : number){
    return this.http.post(`${this._urlApi}SaleDetails/getSaleDetails`,saleId)
   }
}
