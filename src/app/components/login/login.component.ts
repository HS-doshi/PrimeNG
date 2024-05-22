import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, FormsModule,ReactiveFormsModule,
     ButtonModule,CommonModule,InputTextModule,MenuModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder, private loginService: AuthService,
    private msgService : MessageService, private router:Router
  ){}

  get email(){
    return this.loginForm.controls['email']
  }
  get password(){
    return this.loginForm.controls['password']
  }
  loginData(){
    const {email,password} = this.loginForm.value;
    this.loginService.getUserByEmail(email as string).subscribe(res=>{

      if(res.length>0 && res[0].password === password){
        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully!' });
        sessionStorage.setItem('email', email as string)
        this.router.navigate(['home'])
      }
      else{
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is incorrect!' });
      }
    },
    )
  }
}
