import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quickinvoice',
  imports: [FormsModule, ReactiveFormsModule ,MatInputModule,MatFormFieldModule,CommonModule,MatIconModule,MatToolbarModule, MatCardModule],
  templateUrl: './quickinvoice.component.html',
  styleUrl: './quickinvoice.component.css'
})
export class QuickinvoiceComponent {

}
