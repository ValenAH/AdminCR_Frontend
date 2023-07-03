import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(
  ) { }

 ngOnInit(): void {

 }

}
