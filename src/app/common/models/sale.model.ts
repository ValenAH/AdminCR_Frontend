import { Customer } from './customer.model';
import { SaleStatus } from './saleStatus';

export interface Sale {
  id: string,
  consecutive: string,
  saleDate: Date,
  customer: Customer,
  deliveryDate: string,
  saleStatus: SaleStatus
}
