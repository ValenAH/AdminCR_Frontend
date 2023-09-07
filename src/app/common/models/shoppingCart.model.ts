export interface ShoppingCart {
  productId: number,
  productName?: string,
  productDescription?: string,
  amount: number,
  quantity: number,
  discount: number | null,
  tax: number | null
}
