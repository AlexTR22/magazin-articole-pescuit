import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-page',
  imports: [MatCardModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
 // product:Product;
  constructor(private route:ActivatedRoute,public service:ProductService){}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id');  // Obține id-ul din URL
    this.service.getProduct(productId);
    //const prod=this.service.product;
    //this.product={id: prod.id, description: prod.description, name: prod.name, price: prod.price};
  
  }
}
