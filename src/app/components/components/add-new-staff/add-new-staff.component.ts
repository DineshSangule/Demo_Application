import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-staff',
  imports: [MatInputModule,MatFormFieldModule,CommonModule,MatIconModule,MatToolbarModule, MatCardModule,],
  templateUrl: './add-new-staff.component.html',
  styleUrl: './add-new-staff.component.css'
})
export class AddNewStaffComponent {

  

}
