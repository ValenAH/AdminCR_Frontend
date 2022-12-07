import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.sass']
})
export class CreateSaleComponent implements OnInit {
  createSaleOpen: boolean = false;

  createSaleForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.createSaleForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      description: ['', Validators.required],
      unitCost: [0, Validators.required],
      price: [0, Validators.required]
    });
  }

  openComponent(){
    this.createSaleOpen = !this.createSaleOpen
  }

}
