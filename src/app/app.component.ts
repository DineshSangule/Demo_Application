import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './components/login/login.component';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CustomerComponent } from './components/components/customer/customer.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-standalone';
}
