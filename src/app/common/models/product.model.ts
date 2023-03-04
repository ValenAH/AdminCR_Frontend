export interface Product {
  productId: number,
  productName: string,
  description: string,
  price: number,
  unitCost: number,
  stock: number,
  categoryId?: string,
  enable: boolean
}
