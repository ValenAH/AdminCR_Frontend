export interface ShoppingCart {
  productId: number,
  productName?: string,
  productDescription?: string,
  amount: number,
  quantity: number,
  tax: number | null
}
