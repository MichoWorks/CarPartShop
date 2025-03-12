import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // מחזיר את כל המוצרים
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  // מחזיר מוצר לפי מזהה (ID)
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }
  

  // מחזיר את כל ההזמנות
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orders`);
  }

  // מוסיף הזמנה חדשה
  addOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }
  
}
