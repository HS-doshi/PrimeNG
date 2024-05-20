import { Component, OnInit, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule} from 'primeng/button'
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, InputSwitchModule,
    FormsModule, CommonModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
  checked:boolean = true;
  selectedTheme :string = 'dark'

  // use of ngModel i need to import formsModule!
  themenService : ThemeService = inject(ThemeService)

  ngOnInit(): void {
      this.themenService.setTheme(this.selectedTheme);
  }
  onThemeChange(theme:string):void{
    this.selectedTheme = theme;
    this.themenService.setTheme(theme)
  }
}
