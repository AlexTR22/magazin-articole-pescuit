import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule,MatFormFieldModule,MatCardModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string;
  password: string;
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void
  {
    
  }
  onLogin()
  {

  }
}
