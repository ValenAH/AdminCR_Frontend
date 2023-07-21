import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  public products : Product[] = [];
  @Input() _productsToSearch : string = '';

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


}
