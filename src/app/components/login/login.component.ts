import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
 imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  attemptcount:number=0;
  maxAttempt:number=3;

  constructor(private router:Router){}


 fnlogin()
 {
  if(this.username=="1"&&this.password=="1")
  {
    this.router.navigate(['/dashboard']);
  }
  else
  {
    this.attemptcount++;
    if(this.attemptcount==this.maxAttempt)
    {
      alert("You have exceeded 3 failed attempts! Try again later.")
    }
    else{
      alert('Incorrect Email or Password!')

    
    
  }
 }

}
}
