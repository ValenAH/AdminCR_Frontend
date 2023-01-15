import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {


  constructor(
    private searchbarService: SearchbarService
  ) { }

  ngOnInit(): void {
  }



}
