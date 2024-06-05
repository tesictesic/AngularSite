import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Product {
  id: number;
  productName: string;
  description: string;
  price: {
    old: number;
    current: number;
  };
  category_id: number;
  brand_id: number;
  picture:string;
  // Dodajte ostale polja proizvoda ovde ako ih ima
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products_path="assets/data/products.json"
  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get(this.products_path);
  }
  getProducts2(): Observable<Product[]> {
    return this.http.get<Product[]>(this.products_path);
  }
}
