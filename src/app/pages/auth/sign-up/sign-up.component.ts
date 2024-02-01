import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestStatus } from 'src/app/common/models/request-status.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent{
  authForm : FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })
  status: RequestStatus = 'init';
  error: boolean = false;


  constructor(
    private authService: AuthService,
    private readonly fb: FormBuilder,
    private router: Router
  ){ }

  get userName(){ return this.authForm.get('userName');}
  get password() { return this.authForm.get('password');}

  onSubmit(): void{
    if(this.authForm.valid){
      this.status = 'loading';
      const {userName, password} = this.authForm.getRawValue();

      this.authService.signUp(userName, password)
      .subscribe({
        next: () =>{
          this.status = 'success';
          this.router.navigate(['/inicio']);
          this.authService.sendUser(this.userName?.value);
        },
        error: () => {
          this.status = 'failed'
          this.showError();
        }
        // localStorage.setItem('token', response.data.token)
        // this.router.navigate(['/inicio']);
        // Swal.fire("Bienvenido", this.userName?.value , "success")
      });

    }
    else{
      this.authForm.markAllAsTouched();
    }
  }

  showError(){
    this.error = !this.error
  }
}
