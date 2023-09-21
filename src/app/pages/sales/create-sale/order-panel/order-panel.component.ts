import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SaleDetails } from 'src/app/common/models/saleDetails.models';
import { ShoppingCart } from 'src/app/common/models/shoppingCart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { SaleService } from '../../../../services/sale.service';
import { Sale } from 'src/app/common/models/sale.model';

@Component({
  selector: 'app-order-panel',
  templateUrl: './order-panel.component.html',
  styleUrls: ['./order-panel.component.sass']
})
export class OrderPanelComponent implements OnInit {
  @Input() saleForm !: FormGroup;
  @Output() productAdded : EventEmitter<boolean> = new EventEmitter();
  saleDetails!: FormGroup ;
  shoppingCart : ShoppingCart[] = [];
  totalSale : number = 0;
  totalQuantity : number = 0;
  currentDate = new Date();
  constructor(
    private shoppingCartService: ShoppingCartService,
    private saleService: SaleService
  ) {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {
    this.getTotal();
  }
  getTotal(){
    this.shoppingCartService.total$.subscribe({
      next: (total : any)=>{
        this.totalSale = total.totalSale;
        this.totalQuantity = total.totalQuantity
      }
    })
  }

  removeFromCart(productId: number){
    this.shoppingCart = this.shoppingCartService.removeProduct(productId);
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.totalSale = this.shoppingCartService.getTotal();
    this.totalQuantity = this.shoppingCartService.getTotalQuantity();
    if(this.shoppingCart.length === 0)
      this.productAdded.emit(false);
  }

  changes(){
    this.totalSale = this.shoppingCartService.getTotal();
    this.totalQuantity = this.shoppingCartService.getTotalQuantity();
  }

  saveSaleInformation(){
    //saving sale details
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
        console.log('guarda')
      }
    })
    console.log('Objeto', sale)
  }

  createPayment(){

  }


}

