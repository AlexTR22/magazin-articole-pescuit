import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { ProductService } from '../services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-grid',
  imports: [NgFor,ProductsCardComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  constructor(public service: ProductService){} 
  @Input() products: Product[];

  ngOnInit(): void
  {
    
  }
}

