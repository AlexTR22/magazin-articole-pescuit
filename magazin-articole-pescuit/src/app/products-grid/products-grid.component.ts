import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products-grid',
  imports: [NgFor,ProductsCardComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  constructor(public service: ProductService){} 

  ngOnInit(): void
  {
    this.service.getProducts();
  }
}

