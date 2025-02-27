import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // ✅ Use CommonModule instead of BrowserModule
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule  } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';  // ✅ Toolbar
import { MatIconModule } from '@angular/material/icon'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ MatSidenavModule ,MatMenuModule,MatRadioModule, MatNativeDateModule,MatDatepickerModule,MatToolbarModule, MatIconModule,MatCardModule, CommonModule, FormsModule, MatFormFieldModule, MatSelectModule,MatInputModule], // ✅ Removed BrowserModule
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'] 
})
export class CustomerComponent {

  constructor(private router:Router){}
  Status = [
    { value: 'PENDING', viewValue: 'PENDING' },
    { value: 'REPAIRED', viewValue: 'REPAIRED' },
    { value: 'DELIVERED', viewValue: 'DELIVERED' },
    { value: 'CANCELED', viewValue: 'CANCELED' }
  ];
  readonly startDate = new Date(2025, 0, 1);
  estimatedDeliveryTime = "12:00";

  kycOption=[
    {name:'Aadharcard'},
    {name:'Pan Card'}
  ];

  selectKyc(kycType:string)
  {

  }
  staffList=[
    {name:'Umar Sir'},
    {name:'Suyog Sir'},
    {name:'Other'}
  ];
  assignTo(staffName: string) {
   
  }

  
}
