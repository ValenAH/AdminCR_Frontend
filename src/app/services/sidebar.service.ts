import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private showSidebar = new BehaviorSubject<boolean>(true);
  sidebarAction$ = this.showSidebar.asObservable();

  constructor() { }

  sidebarAction(action: boolean){
    this.showSidebar.next(action);
  }
}
