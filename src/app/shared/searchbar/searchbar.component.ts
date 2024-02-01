import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  @Output() searchTextChanged = new EventEmitter<string>();
  wordToSearch!: UntypedFormControl;

  constructor( ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.wordToSearch = new UntypedFormControl('');
  }

  searchText(){
    this.searchTextChanged.emit(this.wordToSearch.value);
  }


}
