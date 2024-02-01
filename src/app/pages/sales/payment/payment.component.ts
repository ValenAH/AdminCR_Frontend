import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentMethod } from 'src/app/common/models/paymentMethod.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  payments : FormGroup = this.formBuilder.group({
    payment: this.formBuilder.array([
      this.formBuilder.group({
        date: ['', Validators.required],
        paymentMethodId: ['', Validators.required],
        amount: ['', Validators.required]
      })
    ])
  });
  paymentMethods : PaymentMethod[] = [];
  
  constructor(
    private saleService : SaleService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  getPaymentMethods(){
    this.saleService.getPaymentMethod().subscribe({
      next: (response : any)=>{
        this.paymentMethods = response.data
      }
    })
  }

  get paymentField(){ return this.payments.get('payment') as UntypedFormArray; }

  private createPaymentField(){
    return this.formBuilder.group({
      date: ['', Validators.required],
      paymentMethodId: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  addPaymentField(){
    this.paymentField.push(this.createPaymentField());
  }
  removePaymentField(i: number){
    this.paymentField.removeAt(i);
  }

  savePayment(){
    console.log(this.payments.value)
  }

}
