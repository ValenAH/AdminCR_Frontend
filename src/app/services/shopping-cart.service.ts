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
    return this.shoppingCart
  }
  removeProduct(productId: number){
    console.log('carrito de compras',this.shoppingCart);
    for(let i = 0; i< this.shoppingCart.length; i++){
      if(this.shoppingCart[i].id === productId ){
        let removido = this.shoppingCart.splice(i,1);
        console.log('removido', removido)
        break
      }

    }
    return this.shoppingCart
  }

  getTotal(){
    return this.totalSale = this.shoppingCart.reduce((sum,item) => sum + item.price, 0)
  }
}
