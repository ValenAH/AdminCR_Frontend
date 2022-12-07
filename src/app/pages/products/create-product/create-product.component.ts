import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../../common/models/product.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {

  createProductOpen: boolean = false;

  createProductForm!: FormGroup ;
  @Output() product = new EventEmitter<Product>();
  @Input() products: Product[] = [{
    productName: '',
    description: '',
    unitCost: 0,
    price: 0
  }];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.createProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      unitCost: [0, Validators.required],
      price: [0, Validators.required]
    });
  }

  get productName(){ return this.createProductForm.get('productName')};
  get description(){ return this.createProductForm.get('description')};
  get unitCost(){ return this.createProductForm.get('unitCost')};
  get price(){ return this.createProductForm.get('price')};



openComponent(){
  this.createProductOpen = !this.createProductOpen
}

saveProduct(){
  const newProduct: Product = {
    productName: this.productName?.value,
    description: this.description?.value,
    unitCost: this.unitCost?.value,
    price: this.price?.value
    };
    this.product.emit(newProduct);
    this.createProductOpen = false;
    console.log('Este es el nuevo producto:' + newProduct.productName)
  }
}




