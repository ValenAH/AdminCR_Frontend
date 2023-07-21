import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../../../common/models/product.model';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/common/models/customer.model';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.sass']
})
export class CreateSaleComponent implements OnInit {
  @Input() _productsToSearch : string = '';
  createCustomer: boolean = false;
  productAdded: boolean = false;
  saleForm!: FormGroup ;
  products: Product[] = [];
  customers: Customer[] = [];
  shoppingCart: Array<Product> = [];
  totalSale: number= 0;

  constructor(private formBuilder: FormBuilder,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService,
    private customerService: CustomerService
    ) {
    this.buildSaleForm();
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCustomers();
  }

  buildSaleForm(){
    this.saleForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      productsList: [[], Validators.required]
    });
  }

  get customerName(){ return this.saleForm.get('customerName');}
  get deliveryDate(){ return this.saleForm.get('deliveryDate');}
  get productsList(){ return this.saleForm.get('products');}

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (response : any) =>{
        this.products = response.data
      }
    })
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (response : any) =>{
        this.customers = response.data
      }
    })
  }
  searchText(text: string){
    this._productsToSearch = text;
  }
  get textToSearch(){ return this._productsToSearch.toUpperCase() }

  addToCart(product: Product){
    if(!this.productAdded)
      this.productAdded = true

    this.shoppingCart = this.shoppingCartService.addProduct(product);
    this.totalSale = this.shoppingCartService.getTotal();
  }
  removeFromCart(productId: number){
    this.shoppingCart = this.shoppingCartService.removeProduct(productId);
    if(this.shoppingCart.length === 0)
      this.productAdded = false;
  }
}
