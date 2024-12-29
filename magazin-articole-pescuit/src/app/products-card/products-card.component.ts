import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../product';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-card',
  imports: [MatCardModule,SlicePipe],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss'
})
export class ProductsCardComponent {
@Input() product: Product;
constructor(private router:Router)
{
  
}
viewProductDetails(productId: number)
{
  this.router.navigate(['/product', productId]);
}
}
