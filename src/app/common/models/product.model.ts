export interface Product {
  id: number
  name: string,
  description: string,
  quantity?: number,
  price: number,
  unitCost: number,
  stock: number,
  categoryId?: string,
  enable: boolean
}
