import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../../common/models/product.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/common/models/category.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class CreateProductComponent implements OnInit {
  public productForm!: FormGroup ;
  public productId: number = 0;
  public productCreated : boolean = false;
  public categories: Category[] = []
  public message : string = '';
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router : Router,
    private route : ActivatedRoute
    ) {  }

  ngOnInit(): void {
    this.buildForm();
    this.getCategories();
    this.route.params.subscribe((params: Params)=>{
      this.productId = Number(params['id']);
      if(this.productId){
        this.getProductById();
      }
    })
  }

  buildForm(){
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      unitCost: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['',Validators.required]
    });
  }

  get name(){ return this.productForm.get('name')};
  get description(){ return this.productForm.get('description')};
  get unitCost(){ return this.productForm.get('unitCost')};
  get price(){ return this.productForm.get('price')};
  get categoryId(){ return this.productForm.get('category')};

  getProductById(){
    this.productService.getProductById(this.productId).subscribe( (response : any) =>{
      this.productForm.patchValue(response.data)
    })
  }
  getCategories(){
    this.productService.getCategories().subscribe({
      next: (response: any)=> {
        this.categories = response.data;
      }
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
    let product ={
      id: this.productId,
      ...this.productForm.value
    }
    this.productService.updateProduct(product).subscribe({
      next: (response: any) =>{
        this.productCreated = true;
        this.message = response.header.message;
        setTimeout(() => {
          this.router.navigate(['/productos'])
        }, 3000)
      }
    })
  }
}



