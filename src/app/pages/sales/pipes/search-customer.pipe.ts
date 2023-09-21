import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/common/models/customer.model';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(customers: Customer[], identificationNumber: string, name: string): Customer[] {
    if(identificationNumber){
      let filteredCustomers = customers.filter((customer) => customer.identificationNumber.includes(identificationNumber));
      return filteredCustomers
    }
    if(name){
      let filteredCustomers = customers.filter((customer) => customer.name.toUpperCase().includes(name));
      return filteredCustomers
    }
    return customers
  }

}
