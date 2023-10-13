import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShoppingCart } from 'src/app/common/models/shoppingCart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.sass']
})
export class OrderPanelComponent implements OnInit {
  @Input() _productsToSearch : string = '';
  products: Product[]= [];
  page : number = 0;
  itemsPerPage : number = 10;
  
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

  nextPage(){
    this.page+=this.itemsPerPage;
   }
  previousPage(){
    this.page-=this.itemsPerPage;
   }
   initialPage(size: number){
    if(size)
      return this.page + 1;
    return 0
   }
   maxValidation(size: number){
    if((this.page + this.itemsPerPage) > size)
      return this.page + size
    return this.page + this.itemsPerPage
   }
   sizeArray(){
    let filteredProducts = this.products
    if(this.textToSearch){
      filteredProducts = this.filter(filteredProducts,'name',this.textToSearch);
    }
    if(!this.textToSearch)
      return this.products.length;
    return filteredProducts.length;
   }

   filter(products: Product[], atribute: string, value: string){
    let filter = [];
    filter = products.filter((request: any)=>request[atribute].toUpperCase().includes(value.toUpperCase()))
    return filter;
   }

   disableNextButton(){
    let size = this.sizeArray();
    if((this.page + this.itemsPerPage)>= size)
      return true
    return false
   }

  

  

  


}

