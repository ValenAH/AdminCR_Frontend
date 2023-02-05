import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent{
  authForm !: FormGroup;
  error: boolean = false;


  constructor(
    private authService: AuthService,
    private readonly fb: FormBuilder,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.initForm();

  }

  private initForm():void {
    this.authForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get userName(){ return this.authForm.get('userName');}
  get password() { return this.authForm.get('password');}

  onSubmit(): void{
    if(this.authForm.valid){
      this.authService.signUp(this.userName?.value,this.password?.value).subscribe((response: any )=> {
        localStorage.setItem('token', response.data.token)
        this.router.navigate(['/inicio']);
        this.authService.sendUser(this.userName?.value);
        Swal.fire("Bienvenido", this.userName?.value , "success")
      },(error)=>{
        this.showError();
      });
    }
  }

  showError(){
    this.error = !this.error
  }
}
