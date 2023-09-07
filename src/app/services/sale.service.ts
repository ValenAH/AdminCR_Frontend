import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Sale } from '../common/models/sale.model';

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
   saveSale(sale : Sale){
    return this.http.post(`${this._urlApi}Sale/SaveSale`, sale)
   }
   getSaleDetails(saleId : number){
    return this.http.post(`${this._urlApi}SaleDetails/getSaleDetails`,saleId)
   }
   getSaleById(saleId : {}){
    return this.http.post(`${this._urlApi}Sale/GetSaleById`, saleId)
   }
   getPaymentMethod(){
    return this.http.get(`${this._urlApi}PaymentMethod/GetPaymentMethods`)
   }
}
