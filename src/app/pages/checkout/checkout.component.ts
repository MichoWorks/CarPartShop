import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any[] = []; // רשימת פריטים בסל
  customerDetails = { name: '', address: '', email: '' }; // פרטי לקוח

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadItems(); // טוען את פריטי הסל
  }

  // טוען את הפריטים מהסל
  private loadItems(): void {
    this.items = this.cartService.getItems();
  }

  // שליחת ההזמנה
  placeOrder(): void {
    if (this.customerDetails.name && this.customerDetails.address && this.customerDetails.email) {
      alert('ההזמנה התקבלה בהצלחה!');
      this.cartService.clearCart(); // ניקוי הסל לאחר ההזמנה
      this.items = []; // ריקון הרשימה המקומית
    } else {
      alert('אנא מלא את כל השדות.');
    }
  }
}
