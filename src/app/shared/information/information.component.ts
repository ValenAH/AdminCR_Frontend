import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.sass']
})
export class InformationComponent implements OnInit {
  @Input() message: string = 'La venta se ha guardado con éxito';
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
