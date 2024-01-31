import { Component, Input, OnInit } from '@angular/core';
import { Sale } from 'src/app/common/models/sale.model';
import { SaleService } from '../../../services/sale.service';
import { SaleStatus } from 'src/app/common/enums/saleStatus.enum';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.sass']
})
export class SalesListComponent implements OnInit {
  sales: Sale[] = [];
  @Input() salesToSearch: string = '';
  saleStatus = SaleStatus;
  editingSale : boolean = false;
  showErrorMessage : boolean = false;
  showInformation : boolean = false;

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

  searchText(text: string){
    this.salesToSearch = text;
  }
  get textToSearch(){ return this.salesToSearch.toUpperCase() }

  changeSaleStatus(sale : Sale){
    if(this.editingSale){
      this.showErrorMessage = true;
    }else{
      sale.edit = true;
      this.editingSale =true;
    }
  }
  confirmChangeStatus(sale : Sale){
    let saleToUpdate = {
      id: sale.id,
      consecutive: sale.consecutive,
      customerId: sale.customer.id,
      saleStatusId: sale.saleStatus.id
    }
    this.saleService.updateSale(saleToUpdate).subscribe({
      next: ()=>{
        this.showInformation = true;
        sale.edit = false;
        this.editingSale = false;
        this.getSales();
      }
    })
  }
  cancelChangeStatus(sale : Sale){
    sale.edit = false;
    this.editingSale = false;
  }
  closeErrorMessage(e : boolean){
    this.showErrorMessage = e;
  }
  closeInformation(e: boolean){
    this.showInformation = e;
  }
}
