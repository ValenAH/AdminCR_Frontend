import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.sass']
})
export class CustomersListComponent implements OnInit {
  public customers : Customer[] = [];
  @Input() _customersToSearch: string = '';
  constructor(
    private customerService : CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (response: any)=>{
        this.customers = response.data;
      }
    })
  }

  searchText(text: string){
    this._customersToSearch = text;
  }
  get textToSearch(){ return this._customersToSearch.toUpperCase() }

}
