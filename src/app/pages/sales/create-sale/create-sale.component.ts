import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../../../common/models/product.model';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.sass']
})
export class CreateSaleComponent implements OnInit {
  createSaleOpen: boolean = false;
  createSaleForm!: FormGroup ;
  productToSearch: string = '';
  products: Product[] = [
    {
      productName: 'Emperador',
      description: 'Colchón Doble Pillow',
      unitCost: 290,
      price: 380,
      category: 'Somier'
    },
    {
      productName: 'Magnate',
      description: 'Colchón de un pillow',
      unitCost: 290,
      price: 380,
    },
    {
      productName: 'Rey',
      description: 'Colchón sencillo',
      unitCost: 290,
      price: 380,
    },
  ]
  filteredProducts: Product[] = this.products;
  shoppingCart: Array<Product> = [];

  totalSale: number= 0;

  constructor(private formBuilder: FormBuilder,
    private shoppingCartService: ShoppingCartService
    ) {
    this.buildSaleForm();
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {

  }


  buildSaleForm(){
    this.createSaleForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      productsList: [[], Validators.required]
    });
  }

  get customerName(){ return this.createSaleForm.get('customerName');}
  get deliveryDate(){ return this.createSaleForm.get('deliveryDate');}
  get productsList(){ return this.createSaleForm.get('products');}

  openComponent(){
    this.createSaleOpen = !this.createSaleOpen
  }

  getWordToSearch(){

  }

  filterProducts(e: any){
    this.getWordToSearch();
    if(this.productToSearch != ''){
      this.filteredProducts = [];
      this.products.map((product: Product) =>{
        if(this.productToSearch.toLowerCase() == product.productName.toLowerCase()){
          this.filteredProducts.push(product);
        }
      })
    }
    if(e.key === "Backspace"){
      this.filteredProducts = this.products;
    }
  }

  addToCart(product: Product){
      this.shoppingCartService.addProduct(product);
      this.totalSale = this.shoppingCartService.getTotal();
  }
}
