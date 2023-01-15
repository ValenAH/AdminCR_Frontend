import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.sass']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerOpen: boolean = false;

  createCustomerForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.createCustomerForm = this.formBuilder.group({
      identificationType: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      customerName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  openComponent(){
    this.createCustomerOpen = !this.createCustomerOpen
  }

}
