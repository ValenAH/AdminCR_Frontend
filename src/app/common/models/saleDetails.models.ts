import { Product } from "./product.model"

export interface SaleDetails {
  productId: number,
  product : Product,
  quantity: number,
  amount: number,
  discount: number,
  tax: number,
  saleId: number
}
