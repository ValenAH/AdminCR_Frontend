import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent{
  authForm !: FormGroup;


  constructor(
    private authService: AuthService,
    private readonly fb: FormBuilder,
    private cookieService: CookieService,
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
        console.log('Login exitoso');
        this.cookieService.set('token_access', response.data.token ,1,'/');
        this.router.navigate(['/inicio']);
        this.authService.sendUser(this.userName?.value);
      })
    }
  }
}
