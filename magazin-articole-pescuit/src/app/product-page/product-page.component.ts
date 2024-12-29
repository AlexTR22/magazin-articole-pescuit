import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';
@Component({
  selector: 'app-product-page',
  imports: [MatCardModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  product:Product;
constructor(private route:ActivatedRoute)
{
  
}
ngOnInit(): void {
  const productId = +this.route.snapshot.paramMap.get('id');  // Obține id-ul din URL
  this.product={id: productId, description:'good job', price:10000, name: 'nu-ti zic'}
  // Logic pentru a încărca produsul cu acest id
}
}
