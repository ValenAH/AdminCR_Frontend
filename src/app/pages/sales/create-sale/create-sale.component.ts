import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Product } from '../../../common/models/product.model';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/common/models/customer.model';
import { SaleDetails } from 'src/app/common/models/saleDetails.models';
import { ShoppingCart } from 'src/app/common/models/shoppingCart.model';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.sass']
})
export class CreateSaleComponent implements OnInit {
  @Input() _productsToSearch : string = '';
  createCustomer: boolean = false;
  productAdded: boolean = false;
  saleForm!: FormGroup;
  products: Product[] = [];
  customers: Customer[] = [];
  shoppingCart: ShoppingCart[] = [];
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
      consecutive: ['', Validators.required],
      customerId: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      statusId: [1]
    })
  }

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
  createCustomerModal(){
    this.createCustomer = true;
  }
  closeModal(event: boolean){
    this.createCustomer = event;
    this.getCustomers();
  }
  closePanel(e : boolean){
    this.productAdded = e;
  }
}
