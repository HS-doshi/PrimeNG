import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductService } from '../../../product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface City{
  name:string;
  code:string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableModule,HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent{

  userList:any[]= [];
  constructor(private productService : ProductService,
    private http:HttpClient
  ){
    this.getUsers()
  }

  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
    })
  }
}
