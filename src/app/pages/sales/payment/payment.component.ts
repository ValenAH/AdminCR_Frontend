import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentMethod } from 'src/app/common/models/paymentMethod.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  payments !: FormGroup;
  paymentMethods : PaymentMethod[] = [];
  constructor(
    private saleService : SaleService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPaymentMethods();
    this.buildForm();
  }

  getPaymentMethods(){
    this.saleService.getPaymentMethod().subscribe({
      next: (response : any)=>{
        this.paymentMethods = response.data
      }
    })
  }
  buildForm(){
    this.payments = this.formBuilder.group({
      payment: this.formBuilder.array([
        this.formBuilder.group({
          date: ['', Validators.required],
          paymentMethodId: ['', Validators.required],
          amount: ['', Validators.required]
        })
      ])
    });
  }
  get paymentField(){ return this.payments.get('payment') as FormArray; }

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
