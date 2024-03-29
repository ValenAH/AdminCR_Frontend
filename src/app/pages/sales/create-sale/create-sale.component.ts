import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, UntypedFormControl } from '@angular/forms';
import { Product } from '../../../common/models/product.model';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/common/models/customer.model';
import { ShoppingCart } from 'src/app/common/models/shoppingCart.model';
import { SaleService } from 'src/app/services/sale.service';
import { Sale } from 'src/app/common/models/sale.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.sass']
})
export class CreateSaleComponent implements OnInit {
  
  createCustomer: boolean = false;
  
  saleForm : FormGroup = this.formBuilder.group({
    customerId: ['', Validators.required],
    deliveryDate: ['', Validators.required],
    saleStatusId: 1,
    isCredit: false
  });
  products: Product[] = [];
  customers: Customer[] = [];
  identificationNumber = new UntypedFormControl('');
  customerName = new UntypedFormControl('');
  enableIdentificationNumber : boolean = false;
  enableCustomerName: boolean = false;
  shoppingCart: ShoppingCart[] = [];
  totalSale: number= 0;
  totalQuantity : number = 0;
  currentDate = new Date();
  productAdded: boolean = false;
  showInformation: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private shoppingCartService: ShoppingCartService,
    private customerService: CustomerService,
    private saleService: SaleService,
    private router: Router
    ) {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getTotal();
  }
  get customerId(){ return this.saleForm.get('customerId')}


  showNames(){ this.enableCustomerName = true; }
  hideNames(){ this.enableCustomerName = false;}
  showIdentificationNumbers(){ this.enableIdentificationNumber = true; }
  hideIdentificationNumbers(){ this.enableIdentificationNumber = false;}
  
  setUppercase(text : string){
    if(text)
      return text.toUpperCase();
    return '';
  }
  setCustomer(customer : Customer){
    this.customerId?.setValue(customer.id);
    this.identificationNumber.setValue(customer.identificationNumber);
    this.customerName.setValue(customer.name);
    this.hideIdentificationNumbers();
    this.hideNames();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (response : any) =>{
        this.customers = response.data
      }
    })
  }

  
  createCustomerModal(){
    this.createCustomer = true;
  }
  closeModal(event: boolean){
    this.createCustomer = event;
    this.getCustomers();
  }
  removeFromCart(productId: number){
    this.shoppingCart = this.shoppingCartService.removeProduct(productId);
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.totalSale = this.shoppingCartService.getTotal();
    this.totalQuantity = this.shoppingCartService.getTotalQuantity();
    
    if(this.shoppingCart.length== 0)
      this.productAdded = false;
  }
  getTotal(){
    this.shoppingCartService.total$.subscribe({
      next: (total : any)=>{
        this.totalSale = total.totalSale;
        this.totalQuantity = total.totalQuantity
      }
    })
  }
  changes(){
    this.totalSale = this.shoppingCartService.getTotal();
    this.totalQuantity = this.shoppingCartService.getTotalQuantity();
  }
  saveSaleInformation(){
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    let string = JSON.stringify(this.shoppingCart)
    let saleDetails = JSON.parse(string);
    saleDetails.map((product : any)=>{
      delete product.productName;
      delete product.productDescription;
    })
    let sale: Sale = {
      saleDate: this.currentDate,
      ...this.saleForm.value,
      totalAmount: this.totalSale,
      saleDetails
    };
    this.saleService.saveSale(sale).subscribe({
      next: ()=> {
        this.showInformation = true;
      }
    })
  }
  closeInformation(e: boolean){
    this.showInformation = e;
    this.router.navigateByUrl("/ventas")
  }
}
