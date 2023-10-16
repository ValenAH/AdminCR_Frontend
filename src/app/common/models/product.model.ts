export interface Product {
  id: number
  name: string,
  description: string,
  price: number,
  unitCost: number,
  stock: number,
  categoryId?: string,
  enable: boolean
}
