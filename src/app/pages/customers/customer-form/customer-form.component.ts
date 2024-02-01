import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IdentificationType } from 'src/app/common/models/identificationType.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.sass']
})
export class CreateCustomerComponent implements OnInit {
  public customerForm: FormGroup = this.formBuilder.group({
    identificationTypeId: ['', Validators.required],
    identificationNumber: ['', Validators.required],
    name: ['', Validators.required],
    telephone: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required]
  });
  public customerId : number = 0;
  public identificationTypes : IdentificationType[] = [];
  public customerCreated : boolean = false;
  public message :string ='';
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.getIdentificationTypes();
    this.route.params.subscribe((params: Params)=>{
      this.customerId = Number(params['id']);
      if(this.customerId){
        this.getCustomerById();
      }
    })
  }

  getCustomerById(){
    this.customerService.getCustomerById(this.customerId).subscribe({
      next: (response : any) =>{
        this.customerForm.patchValue(response.data);
      }
    })
  }

  getIdentificationTypes(){
    this.customerService.getIdentificationType().subscribe({
      next: (response : any) =>{
        this.identificationTypes = response.data;
      }
    })
  }

  updateCustomer(){
    let customer = {
      id: this.customerId,
      ...this.customerForm.value
    }
    this.customerService.updateCustomer(customer).subscribe({
      next: (response: any)=>{
        this.customerCreated = true;
        this.message = response.header.message;
        setTimeout(() => {
          this.router.navigate(['/clientes'])
        }, 3000)
      }
    })
  }

  saveCustomer(){
    this.customerService.saveCustomer(this.customerForm.value).subscribe({
      next: (response: any) => {
        this.customerCreated = true;
        this.message = response.header.message;
        setTimeout(() => {
          this.router.navigate(['/clientes'])
        }, 3000)
      }
    })
  }

  saveForm(){
    if(this.customerId)
      this.updateCustomer();
    else
      this.saveCustomer();
  }

}
