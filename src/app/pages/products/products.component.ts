import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      productId: '01',
      productName: 'Emperador',
      description: 'Colchón Doble Pillow',
      unitCost: 290,
      price: 380,
      category: 'Somier'
    },
    {
      productId: '02',
      productName: 'Magnate',
      description: 'Colchón de un pillow',
      unitCost: 290,
      price: 380,
    },
    {
      productId: '03',
      productName: 'Rey',
      description: 'Colchón sencillo',
      unitCost: 290,
      price: 380,
    },
  ]

  deleteProduct(i: number){
    this.products.splice(i , 1);
  }

  addProduct(product: Product){
    this.products.push(
      {
        productId: product.productId,
        productName: product.productName,
        description:product.description,
        unitCost: product.unitCost,
        price: product.price,
      });
      console.log(this.products);
  }

  loadProduct(product: Product){
    console.log(product.productName)
    this.addProduct(product);
  }
}
