import { Component } from '@angular/core';
import { ProductsGridComponent } from "../products-grid/products-grid.component";

@Component({
  selector: 'app-products-view',
  imports: [ProductsGridComponent],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.scss'
})
export class ProductsViewComponent {

}
