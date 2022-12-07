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
      customerName: ['', Validators.required],
      description: ['', Validators.required],
      unitCost: [0, Validators.required],
      price: [0, Validators.required]
    });
  }

  openComponent(){
    this.createCustomerOpen = !this.createCustomerOpen
  }

}
