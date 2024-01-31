import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
import { Payment } from 'src/app/common/models/payment.model';
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
  public payments: Payment[] = [];

  constructor(
    private route : ActivatedRoute,
    private saleService : SaleService
  ) {
    this.saleId = Number(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.getSaleById();
    this.getPaymentById();
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
  getPaymentById(){
    this.saleService.getPayments(this.saleId).subscribe({
      next: (response: any)=> {
        this.payments = response.data;
      }
    })
  }

  deleteSaleDetail(id:number){
    this.saleService.deleteSaleDetail(id).subscribe({
      next:(resp) => {
        console.log(resp)
      }
    })
  }

  edit(isEdit:boolean){
    if(isEdit)
      isEdit = false;
    else{
      isEdit = true;
    }
    console.log(isEdit);
  }
  cancelEdit(isEdit:boolean){
    if(isEdit)
      isEdit = false;
    else{
      isEdit = true;
    }
    console.log(isEdit);
  }
  confirmEdit(saleDetailId: number){

  }

  openInvoice(){
    window.open(`${environment.backend_url}Sale/${this.sale.id}`);
  }

}
