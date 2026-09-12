import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private _urlApi: string;

  constructor(
    private http: HttpClient
  ) {
    this._urlApi = environment.backend_url;
  }

  getPaymentMethod(){
    return this.http.get(`${this._urlApi}PaymentMethod/GetPaymentMethods`)
  }

  getPayments(id: number){
    return this.http.get(`${this._urlApi}Payment/${id}`)
  }

  savePayment(payment: {
    saleId: number,
    paymentMethodId: number,
    amount: number,
    date: string
  } | Array<{
    saleId: number,
    paymentMethodId: number,
    amount: number,
    date: string
  }>) {
    return this.http.post(`${this._urlApi}Payment/SavePayment`, payment)
  }
}
