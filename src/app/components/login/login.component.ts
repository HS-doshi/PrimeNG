import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.pattern]]
  })


  constructor(private fb:FormBuilder){}
}
