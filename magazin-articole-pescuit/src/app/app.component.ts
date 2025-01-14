import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { MatIconModule } from '@angular/material/icon';
//import { MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterOutlet} from '@angular/router';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magazin-articole-pescuit';
  constructor(private router: Router,){}
  ngOnInit():void
  {
    
  }

}
