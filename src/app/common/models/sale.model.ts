import { Customer } from './customer.model';
import { Product } from './product.model';

export interface Sale {
  orderId: string,
  customer: Customer,
  productList: Product[],
  deliveryDate: string,
  paymentMethod?: string,
  totalAmount: number,
  orderStatus: string
}
