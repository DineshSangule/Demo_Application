import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {OnInit, VERSION, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatSidenavModule,CommonModule, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule, MatDividerModule,MatTreeModule,MatTabsModule,MatChipsModule, MatDatepickerModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router:Router){} 
  demo()
  {
    alert('hello');
   
  }
  logout()
  {
    this.router.navigate(['/login']);
  }
  quickinvoice()
  {
    this.router.navigate(['/quickinvoice']);
  }

}
