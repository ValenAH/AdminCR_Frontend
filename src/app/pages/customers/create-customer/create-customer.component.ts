import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.sass']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm!: FormGroup ;
  customerId : number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((params: Params)=>{
      this.customerId = Number(params['id']);
      if(this.customerId){
        this.getCustomerById();
      }
    })
  }

  buildForm(){
    this.createCustomerForm = this.formBuilder.group({
      identificationType: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      customerName: ['', Validators.required],
      telephone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  getCustomerById(){
    this.customerService.getCustomerById(this.customerId).subscribe({
      next: (response : any) =>{
        this.createCustomerForm.patchValue(response.data);
      }
    })
  }

  saveCustomer(){
    this.customerService.saveCustomer(this.createCustomerForm.value).subscribe({
      next: (response) => {

      }
    })
  }


}
