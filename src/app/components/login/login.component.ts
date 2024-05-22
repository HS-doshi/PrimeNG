import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { HttpClientModule } from '@angular/common/http';
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
  constructor(private fb:FormBuilder){}

  get email(){
    return this.loginForm.controls['email']
  }
  get password(){
    return this.loginForm.controls['password']
  }
}
