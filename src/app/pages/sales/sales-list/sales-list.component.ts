import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/common/models/sale.model';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.sass']
})
export class SalesListComponent implements OnInit {
  public sales: Sale[] = []

  constructor(
    private saleService: SaleService
  ) { }

  ngOnInit(): void {
    this.getSales();
  }
  getSales(){
    this.saleService.getSales().subscribe({
      next: (response : any) => {
        this.sales = response.data
        this.sales.reverse();
      }
    })
  }

  searchText($event: any){

  }

}
