import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SaleDetails } from 'src/app/common/models/saleDetails.models';
import { ShoppingCart } from 'src/app/common/models/shoppingCart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { SaleService } from '../../../../services/sale.service';
import { Sale } from 'src/app/common/models/sale.model';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.sass']
})
export class OrderPanelComponent implements OnInit {
  @Input() _productsToSearch : string = '';
  @Input() saleForm !: FormGroup;
  products: Product[]= [];
  
  saleDetails!: FormGroup ;
  shoppingCart : ShoppingCart[] = [];
  totalSale : number = 0;
  
  
  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
  ) {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {
    this.getProducts();
  }
  searchText(text: string){
    this._productsToSearch = text;
  }
  get textToSearch(){ return this._productsToSearch.toUpperCase() }
  getProducts(){
    this.productService.getProducts().subscribe({
      next: (response : any) =>{
        this.products = response.data
      }
    })
  }
  addToCart(product: Product){
    let item = {
      productId: product.id,
      productName: product.name,
      productDescription: product.description,
      amount: product.price,
      quantity: 1,
      discount: null,
      tax: null

    }
    this.shoppingCart = this.shoppingCartService.addProduct(item);
    this.shoppingCartService.sendTotal();
  }
  

  

  

  


}

