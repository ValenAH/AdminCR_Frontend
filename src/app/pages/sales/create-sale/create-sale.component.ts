import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../../../common/models/product.model';
import { SearchbarService } from '../../../services/searchbar.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.sass']
})
export class CreateSaleComponent implements OnInit {
  createSaleOpen: boolean = false;
  createSaleForm!: FormGroup ;
  productToSearch: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = this.products;
  selectedProducts: Array<Product> = [];
  totalSale: number= 0;

  constructor(private formBuilder: FormBuilder,
    private searchbarService: SearchbarService
    ) {
    this.buildSaleForm();
  }

  ngOnInit(): void {

  }

  buildSaleForm(){
    this.createSaleForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      productsList: [null, Validators.required],
      totalAmount: [0, Validators.required]
    });
  }

  get customerName(){ return this.createSaleForm.get('customerName');}
  get deliveryDate(){ return this.createSaleForm.get('deliveryDate');}
  get productsList(){ return this.createSaleForm.get('products');}
  get totalAmount(){ return this.createSaleForm.get('totalAmount');}

  openComponent(){
    this.createSaleOpen = !this.createSaleOpen }

  getWordToSearch(){
    this.productToSearch = '';
    this.searchbarService.wordtoSearch$.subscribe(word =>{
      this.productToSearch = word;
    })
  }

  filterProducts(e: any){
    this.getWordToSearch();
    if(this.productToSearch != ''){
      this.filteredProducts = [];
      this.products.map((product: Product) =>{
        if(this.productToSearch.toLowerCase() == product.productName.toLowerCase()){
          this.filteredProducts.push(product);
        }
      })
    }
    if(e.key === "Backspace"){
      this.filteredProducts = this.products;
    }
  }

  selectProducts(product: Product, i: any){
    console.log(i);
    this.selectedProducts.push(product);
    this.setTotalAmount(this.selectedProducts);
  }

  setTotalAmount(productsChecked: Array<Product>){
    this.totalSale = 0;
    productsChecked.map(product =>{
      this.totalSale += product.price
    });
    this.totalAmount?.setValue(this.totalSale);
  }

}
