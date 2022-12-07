import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {
  createUserOpen: boolean = false;

  createUserForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.createUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      description: ['', Validators.required],
      unitCost: [0, Validators.required],
      price: [0, Validators.required]
    });
  }

  openComponent(){
    this.createUserOpen = !this.createUserOpen
  }

}
