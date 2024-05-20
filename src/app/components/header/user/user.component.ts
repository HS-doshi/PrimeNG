import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface City{
  name:string;
  code:string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  cities: City[] | undefined;
  selectedCity?:City;

  ngOnInit(): void {
      this.cities=[
        {name:'United States', code:'usa'},
        {name:'London', code:'ldn'},
        {name:'Delhi', code:'dlh'},
        {name:'Banguluru', code:'blr'},
        {name:'New Mumbai', code:'nm'},
        {name:'Paris', code:'prs'},
        {name:'Ahmedabad', code:'ahm'},
      ]
  }
}
