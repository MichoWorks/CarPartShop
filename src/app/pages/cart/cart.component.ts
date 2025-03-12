import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[] = []; // רשימה של פריטים בסל

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadItems(); // טוען פריטים מהשירות
  }

  // טוען פריטים מהסל
  private loadItems(): void {
    this.items = this.cartService.getItems();
  }

  // מנקה את הסל
  clearCart(): void {
    this.cartService.clearCart();
    this.loadItems(); // מעדכן את הרשימה לאחר הניקוי
    alert('הסל נוקה!');
  }
}
