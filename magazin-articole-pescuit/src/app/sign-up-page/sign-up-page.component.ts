import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sign-up-page',
  imports: [ MatCardModule,FormsModule ,MatIconModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {
  //signupForm: FormGroup<any>;
  username: string;
  password: string;
email: any;
  constructor(private route:Router){}
 
  onSignUp()
  {
   
  }
}
