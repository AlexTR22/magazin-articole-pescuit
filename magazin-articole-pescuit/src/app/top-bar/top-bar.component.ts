import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { Router} from '@angular/router';
@Component({
  selector: 'app-top-bar',
  imports: [MatIconModule,FormsModule,MatToolbarModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  productName:string;
  constructor(private route:Router){}
  ngOnInit(): void
  {
  
  }
  OnGoHomePage()
  {
    this.route.navigate(['/']);
  }
  OnGoLogin()
  {
    this.route.navigate(['/login']);
  }
  OngoSignup()
  {
    this.route.navigate(['/signup']);
  }
}
