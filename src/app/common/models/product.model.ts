export interface Product {
  productId: string,
  productName: string,
  description: string,
  quantity?: number,
  unitCost?: number,
  price: number,
  category?: string
}
