import { Customer } from './customer.model';
import { SaleStatus } from './saleStatus';
import { SaleDetails } from './saleDetails.models';

export interface Sale {
  id?: string,
  consecutive?: string,
  saleDate: Date,
  customer: Customer,
  deliveryDate: string,
  saleStatus: SaleStatus,
  totalAmount: number,
  saleDetails?: SaleDetails[]
}
