import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [MatIconModule,FormsModule,MatToolbarModule,CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  productName:string;
  isHomePage: boolean;
  constructor(private route:Router){}
  ngOnInit(): void {
    this.checkIfHomePage();

    this.route.events.subscribe(() => {
      this.checkIfHomePage();
    });
  }

  checkIfHomePage(): void {
    // Verifică dacă ruta curentă este "/home" (sau ce folosești pentru pagina de Acasă)
    this.isHomePage = this.route.url === '/home';
    
  }

  showDropdown(): void {
    console.log(this.isHomePage);
    if (!this.isHomePage) {
      document.querySelector('.dropDown-prod')?.classList.add('show');
    }
  }

  hideDropdown(): void {
    console.log(this.isHomePage);
    if (!this.isHomePage) {
      document.querySelector('.dropDown-prod')?.classList.remove('show');
    }
  }
  OnGoHomePage()
  {
    this.route.navigate(['/home']);
  }
  OnGoLogin()
  {
    this.route.navigate(['/login']);
  }
  OngoSignup()
  {
    this.route.navigate(['/signup']);
  }
  OnGoNewItems()
  {
    this.route.navigate(['/newitems']);
  }
  OnGoInformations()
  {
    this.route.navigate(['/informations']);
  }
  selectCategory(category: string)
  {
    this.route.navigate([category === null ? '/home' : '/category', category]);
  }
  OnGoFavorites()
  {
    this.route.navigate(['/favorite']);
  }
  OnGoShoppingCart()
  {
    this.route.navigate(['/shoppingcart']);
  }
}
