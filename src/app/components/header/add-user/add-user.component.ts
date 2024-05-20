import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  cities: City[]=[
        {name:'United States', code:'usa'},
        {name:'London', code:'ldn'},
        {name:'Delhi', code:'dlh'},
        {name:'Banguluru', code:'blr'},
        {name:'New Mumbai', code:'nm'},
        {name:'Paris', code:'prs'},
    ];
}

interface City{
  name:string;
  code:string;
}
