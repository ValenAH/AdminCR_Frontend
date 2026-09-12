import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethod } from 'src/app/common/models/paymentMethod.model';
import { normalizeToUtcIsoDate } from 'src/app/common/utils/date.util';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  private saleId: number;
  showInformation: boolean = false;

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
    private paymentService : PaymentService,
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.saleId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  getPaymentMethods(){
    this.paymentService.getPaymentMethod().subscribe({
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
    const payments = this.paymentField.value.map((payment: any) => ({
      saleId: this.saleId,
      paymentMethodId: Number(payment.paymentMethodId),
      amount: Number(payment.amount),
      date: normalizeToUtcIsoDate(payment.date)
    }));

    this.paymentService.savePayment(payments).subscribe({
      next: () => {
        this.showInformation = true;
      },
      error: (error) => {
        console.error('Error al guardar el pago', error);
      }
    });
  }

  closeInformation(e: boolean){
    this.showInformation = e;
    this.router.navigateByUrl('/ventas');
  }

}
