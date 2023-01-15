import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchbarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  wordToSearch!: FormControl;

  constructor(
    private searchbarService: SearchbarService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.wordToSearch = new FormControl('');
  }

  searchWord(){
    if(this.wordToSearch.value != ''){
      this.searchbarService.searchWord(this.wordToSearch.value);
    }
  }

}
