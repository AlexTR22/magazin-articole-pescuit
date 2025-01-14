import { Component, Input } from '@angular/core';
import { ProductsGridComponent } from "../products-grid/products-grid.component";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-view',
  imports: [ProductsGridComponent],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.scss'
})
export class ProductsViewComponent {
 category: string='';
 constructor(private route: ActivatedRoute,private service:ProductService){}
 products: Product[];
 ngOnInit(): void {
  // Preia categoria din URL
  this.route.paramMap.subscribe(params => {
    this.category = params.get('category') || 'promotii';
    if(this.category=='promotii')
      {
        this.service.getProducts();
        this.products= this.service.products;
      }
      else
      {
        this.service.getProductsByCategory(this.category);
        this.products= this.service.products;
      }
    });
  }
}
