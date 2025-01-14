import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
@Injectable({ 
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7107/Products';
  constructor(private http: HttpClient) { }
  products: Product[]=[];
  product:Product;
  getProducts()
  {
    this.http.get(this.apiUrl).subscribe({
      next: res=>{this.products=res as Product[];},
      error: err=>{console.log('Err from API:',err);}
    });
  }

  getProduct(id:number)
  { 
    const url = `${this.apiUrl}/${id}`;
    this.http.get(url).subscribe({
      next: res=>{this.product = res as Product;},
      error: err=>{console.log('Err from API:',err);}
    });
  }
} 
