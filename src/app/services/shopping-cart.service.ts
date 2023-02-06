import { Injectable } from '@angular/core';
import { Product } from '../common/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart: Array<Product> = [];
  totalSale: number = 0;

  constructor() { }

  getShoppingCart(){
    return this.shoppingCart
  }

  addProduct(product: Product){
    this.shoppingCart.push(product);
  }

  getTotal(){
    return this.totalSale = this.shoppingCart.reduce((sum,item) => sum + item.price, 0)
  }
}
