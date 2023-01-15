import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.sass']
})
export class ErrorMessageComponent implements OnInit {
  message: string = 'Ha ocurrido un error';
  constructor() { }

  ngOnInit(): void {
  }

}
