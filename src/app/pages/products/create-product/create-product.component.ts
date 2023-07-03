import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../../common/models/product.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {
  public productForm!: FormGroup ;
  public productId: number = 0;
  public productCreated : boolean = false;
  public message : string = '';
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router : Router,
    private route : ActivatedRoute
    ) {  }

  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((params: Params)=>{
      this.productId = Number(params['id']);
      if(this.productId){
        this.getProductById();
      }
    })
  }

  buildForm(){
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      unitCost: [0, Validators.required],
      price: [0, Validators.required]
    });
  }

  get productName(){ return this.productForm.get('productName')};
  get description(){ return this.productForm.get('description')};
  get unitCost(){ return this.productForm.get('unitCost')};
  get price(){ return this.productForm.get('price')};

  getProductById(){
    this.productService.getProductById(this.productId).subscribe( (response : any) =>{
      this.productForm.patchValue(response.data)
    })
  }

  saveForm(){
    if(this.productId){
      this.updateProduct();
    } else {
      this.saveProduct();
    }
  }

  saveProduct(){
    this.productService.saveProduct(this.productForm.value).subscribe({
      next: (response : any)=>{
        this.productCreated = true;
        this.message = response.header.message;
        setTimeout(() => {
          this.router.navigate(['/productos'])
        }, 3000)
      }
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.productForm.value).subscribe({
      next: (response: any) =>{

      }
    })
  }
}




