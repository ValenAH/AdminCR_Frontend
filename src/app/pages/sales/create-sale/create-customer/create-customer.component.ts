import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentificationType } from 'src/app/common/models/identificationType.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.sass']
})
export class CreateCustomerComponent implements OnInit {
  @Output() closeCustomerModal : EventEmitter<boolean> = new EventEmitter();
  identificationTypes : IdentificationType[] = [];
  customerForm !: FormGroup;
  customerCreated : boolean = false;
  message : string = '';
  constructor(
    private customerService: CustomerService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getIdentificationTypes();
  }
  buildForm(){
    this.customerForm = this.formBuilder.group({
      identificationTypeId: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  getIdentificationTypes(){
    this.customerService.getIdentificationType().subscribe({
      next: (response : any) =>{
        this.identificationTypes = response.data;
      }
    })
  }
  closeModal(){
    this.closeCustomerModal.emit(false);
  }
  saveForm(){
    this.customerService.saveCustomer(this.customerForm.value).subscribe({
      next: (response: any) => {
        this.customerCreated = true;
        this.message = response.header.message;
        setTimeout(() => {
          this.closeModal();
        }, 3000)
      }
    })
  }

}
