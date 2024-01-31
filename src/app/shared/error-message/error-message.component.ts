import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.sass']
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string = '';
  @Output() closeInformation = new EventEmitter<boolean>(); 
  constructor() { }

  ngOnInit(): void {
    this.closeModal();
  }

  closeModal(){
    setInterval(()=>{
      this.closeInformation.emit(false);
    }, 2000)
  }
}
