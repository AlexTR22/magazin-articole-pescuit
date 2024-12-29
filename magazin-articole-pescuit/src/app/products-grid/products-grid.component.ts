import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { Product } from '../product';
@Component({
  selector: 'app-products-grid',
  imports: [NgFor,ProductsCardComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  products: Product[];
  
  constructor()
  {
    this.products=[{id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132},
      {id:1, name:'asfga',description:'ghtrg sdf fhgjhgdfs adg sdgfhgjghg fsdf asdf fhgjhgd fasdgdfhgf jhfhdfgsfafd',price:2132}
    ];
  } 
}
