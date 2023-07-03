import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  @Output() searchTextChanged = new EventEmitter<string>();
  wordToSearch!: FormControl;

  constructor( ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.wordToSearch = new FormControl('');
  }

  searchText(){
    this.searchTextChanged.emit(this.wordToSearch.value);
  }


}
