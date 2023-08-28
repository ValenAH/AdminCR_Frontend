import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sale } from 'src/app/common/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.sass']
})
export class SaleDetailsComponent implements OnInit {
  private saleId : number;
  public sale !: Sale;

  constructor(
    private route : ActivatedRoute,
    private saleService : SaleService
  ) {
    this.saleId = Number(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.getSaleById();
  }

  getSaleById(){
    let data = {
      Id: this.saleId
    }
    this.saleService.getSaleById(data).subscribe({
      next: (response : any) => {
        this.sale = response.data;
      }
    })
  }

}
