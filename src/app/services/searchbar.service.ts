import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  private word = new BehaviorSubject<string>('');
  wordtoSearch$ = this.word.asObservable();

  constructor() { }

  searchWord(word : string){
    this.word.next(word);
  }
}
