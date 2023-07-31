import { Injectable } from '@angular/core';
import { Product } from '../common/models/product.model';
import { ShoppingCart } from '../common/models/shoppingCart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart: ShoppingCart[] = [];
  totalSale: number = 0;
  totalQuantity: number = 0;
  private total = new BehaviorSubject<{}>({});
  public total$ = this.total.asObservable();
  constructor() { }

  getShoppingCart(){
    return this.shoppingCart
  }

  addProduct(product: ShoppingCart){
    if(this.shoppingCart.length !== 0){
      let founded = false;
      for(let i= 0; i < this.shoppingCart.length; i++){
        if(this.shoppingCart[i].productId === product.productId){
          founded = true;
          console.log('Ya agregó ese producto a la lista');
          break;
        }
      }
      if(!founded)
      this.shoppingCart.push(product);
    }
    else
      this.shoppingCart.push(product);
    return this.shoppingCart
  }
  removeProduct(productId: number){
    for(let i = 0; i< this.shoppingCart.length; i++){
      if(this.shoppingCart[i].productId === productId ){
        this.shoppingCart.splice(i,1);
        break;
      }

    }
    return this.shoppingCart
  }

  getTotalQuantity(){
    return this.totalQuantity = this.shoppingCart.reduce((q,item) => q + item.quantity,0)
  }

  getTotal(){
    return this.totalSale = this.shoppingCart.reduce((sum,item) => sum + item.amount*item.quantity, 0)
  }
  sendTotal(){
    let total ={
      totalSale: this.getTotal(),
      totalQuantity: this.getTotalQuantity()
    }
    this.total.next(total);
  }
}
