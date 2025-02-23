import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider'; 

@Component({
  selector: 'app-repairing-staff',
  imports: [MatDividerModule,CommonModule,MatIconModule,MatToolbarModule, MatCardModule],
  templateUrl: './repairing-staff.component.html',
  styleUrl: './repairing-staff.component.css'
})
export class RepairingStaffComponent {
  showDetails: boolean = false;
  constructor (private router:Router){}

  addnew()
  {
    this.router.navigate(['/addstaff']);
  }
  
  profile=[
    {
      id:1084,
      name:'umar sir',
      mobileno:'9373137378',
      address:'pune',
      username:'umar@123',
      password:'123',
      status:'Active',
      showDetails:false
    },
    {
      id:1085,
      name:'Dinesh',
      mobileno:'9373137378',
      address:'barshi',
      username:'Dinesh@123',
      password:'123',
      status:'Active',
      showDetails:false

    },

    {
      id:1084,
      name:'umar sir',
      mobileno:'9373137378',
      address:'pune',
      username:'umar@123',
      password:'123',
      status:'Active',
      showDetails:false
    },
    {
      id:1085,
      name:'Dinesh',
      mobileno:'9373137378',
      address:'barshi',
      username:'Dinesh@123',
      password:'123',
      status:'Active',
      showDetails:false

    }
  ];

  toggleDetails(index:number)
  {
    this.profile[index].showDetails = !this.profile[index].showDetails;
  }

}
