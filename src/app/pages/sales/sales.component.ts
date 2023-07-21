import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Sale } from '../../common/models/sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {

  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(

  ) { }

  ngOnInit(): void {
  }



}
