import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ProductsViewComponent } from "./products-view/products-view.component";
import { Router, RouterOutlet} from '@angular/router';
import { ProductsGridComponent } from "./products-grid/products-grid.component";
@Component({
  selector: 'app-root',
  imports: [FormsModule, MatIconModule, MatToolbarModule, ProductsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magazin-articole-pescuit';
  productName:string;
  constructor(private router: Router){}
  OnGoHomePage()
  {
    this.router.navigate(['/']);
  }
}
