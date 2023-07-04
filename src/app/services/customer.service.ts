import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Customer } from '../common/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _urlApi: string;

  constructor(
    private http: HttpClient
  ) {
    this._urlApi = environment.dev.url;
   }

   getCustomers(){
    return this.http.get(`${this._urlApi}Customer/GetCustomers`)
   }

   getCustomerById(customerId : number){
    let customer = {
      customerId: customerId
    }
    return this.http.post(`${this._urlApi}Customer/GetCustomerById`, customer)
   }

   saveCustomer(customer: Customer){
    return this.http.post(`${this._urlApi}Customer/SaveCustomer`,customer)
   }

   updateCustomer(customer: Customer){
    return this.http.post(`${this._urlApi}Customer/SaveCustomer`,customer)
   }
}
