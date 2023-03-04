import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }



  deleteProduct(i: number){
    this.products.splice(i , 1);
  }

  addProduct(product: Product){
    // this.products.push(
    //   {
    //     productId: product.productId,
    //     productName: product.productName,
    //     description:product.description,
    //     unitCost: product.unitCost,
    //     price: product.price,
    //   });
    //   console.log(this.products);
  }

  loadProduct(product: Product){
    console.log(product.productName)
    this.addProduct(product);
  }
}
