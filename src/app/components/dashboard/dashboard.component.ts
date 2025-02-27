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
import { RouteConfigLoadStart, RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { MatSidenavModule } from '@angular/material/sidenav'; // ✅ Import MatSidenavModule
import { Router } from '@angular/router'; // ✅ CORRECT


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatSidenavModule,RouterModule,CommonModule, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule, MatDividerModule,MatTreeModule,MatTabsModule,MatChipsModule, MatDatepickerModule],  
})

export class DashboardComponent implements OnInit{
  
    ngVersion: string=VERSION.full;
    breakpoint: number=0;

    constructor(private router:Router){}

    ngOnInit()
    {
      this.breakpoint=(window.innerWidth <= 600) ? 2:4;
    }
    onResize(event:any)
    {
      this.breakpoint=(event.target.innerWidth <=600) ? 2:4;
    }

    yestrday=[
      {
        name:'dinesh',
        date:'9 jan 2025',
        model:'Vivo s1',
        payment:500
      },
      {
        name:'dinesh',
        date:'9 jan 2025',
        model:'Vivo s1',
        payment:500
      },
      {
        name:'dinesh',
        date:'9 jan 2025',
        model:'Vivo s1',
        payment:500

      }
    ];

    today=[
      {
        name:'dinesh',
        date:'9 jan 2025',
        model:'Vivo s1',
        payment:500
      },
      {
        name:'dinesh',
        date:'9 jan 2025',
        model:'Vivo s1',
        payment:500
      },
      {
        name:'dinesh',
        date:'9 jan 2025',
        model:'Vivo s1',
        payment:500

      }
    ];

    homepage()
    {
      this.router.navigate(['/homepage']);

    }
    
  }

