import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Import this!

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  imports: [FormsModule,MatInputModule,MatFormFieldModule,CommonModule,MatIconModule,MatToolbarModule, MatCardModule],

  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

  constructor(private router:Router){}

  registration()
  {
  this.router.navigate(['\login']);
  }

}
