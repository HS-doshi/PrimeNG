import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interface/auth';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, CardModule,
    ButtonModule,InputTextModule,MenuModule,ToastModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[AuthService]
})
export class RegisterComponent {

  registerForm  = this.fb.group({
    fullName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email:['',[Validators.required, Validators.email]],
    password :['',Validators.required],
    confirmPassword :['',Validators.required],
  },
    {
      validators : passwordMatchValidator
    }
  )
  constructor(private fb:FormBuilder,
    private authService : AuthService,
    private msgService : MessageService,
    private router : Router,
  ){}

  get fullName(){
    return this.registerForm.controls['fullName']
  }
  get email(){
    return this.registerForm.controls['email']
  }
  get password(){
    return this.registerForm.controls['password']
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }
  submitDetails(){
    const postdata = {...this.registerForm.value};
    delete postdata.confirmPassword;

    this.authService.registerUser(postdata as User).subscribe(res=>{
      console.log(res)
      this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Successfully Registered!' });
      this.router.navigate(['login'])
    },(error)=>{
      this.msgService.add({ severity: 'error', summary: 'Success', detail: 'Successfully Registered!' });
    })
  }
}
