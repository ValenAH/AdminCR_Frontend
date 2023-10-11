import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  products : Product[] = [];
  @Input() _productsToSearch : string = '';
  page : number = 0;
  itemsPerPage : number = 10;

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (response: any) =>{
        this.products = response.data;
      }
    })
  }
  searchText(text: string){
    this._productsToSearch = text;
  }
  get textToSearch(){ return this._productsToSearch.toUpperCase() }


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
