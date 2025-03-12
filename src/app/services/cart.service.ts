import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = []; // משתנה שמחזיק את פריטי הסל

  constructor() {}

  // הוספת פריט לסל
  addToCart(product: any): void {
    this.items.push(product);
  }

  // קבלת פריטים בסל
  getItems(): any[] {
    return this.items;
  }

  // ניקוי הסל
  clearCart(): any[] {
    this.items = [];
    return this.items;
  }
}
