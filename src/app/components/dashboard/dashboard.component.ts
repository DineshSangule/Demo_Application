import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {OnInit, VERSION, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule, MatDividerModule,MatTreeModule,MatTabsModule,MatChipsModule, MatDatepickerModule],  
})
export class DashboardComponent implements OnInit{
  
    ngVersion: string=VERSION.full;
    breakpoint: number=0;
    constructor(){}

    ngOnInit()
    {
      this.breakpoint=(window.innerWidth <= 600) ? 2:4;
    }
    onResize(event:any)
    {
      this.breakpoint=(event.target.innerWidth <=600) ? 2:4;
    }
  }

