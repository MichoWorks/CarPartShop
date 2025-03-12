import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service'; // לטעינת מוצרים משירות

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // רשימת מוצרים
  categories: { name: string; products: Product[] }[] = []; // קטגוריות מוצרים
  activeTab: string = ''; // הלשונית הפעילה
  popupVisible: boolean = false; // מציין אם ההתראה מוצגת
  popupMessage: string = ''; // טקסט ההתראה

  constructor(
    private cartService: CartService,
    private productService: ProductService // שירות לניהול מוצרים
  ) {}

  ngOnInit(): void {
    this.loadProducts(); // טוען מוצרים
  }

  // טוען מוצרים מהשירות ומחלק לקטגוריות
  private loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.categorizeProducts(); // חלוקת המוצרים לקטגוריות
      if (this.categories.length > 0) {
        this.activeTab = this.categories[0].name; // קביעת לשונית ברירת מחדל
      }
    });
  }

  // חלוקת המוצרים לקטגוריות
  private categorizeProducts(): void {
    const grouped = this.products.reduce(
      (acc: { [key: string]: Product[] }, product) => {
        const category = product.category || 'לא מוגדר';
        acc[category] = acc[category] || [];
        acc[category].push(product);
        return acc;
      },
      {}
    );

    this.categories = Object.keys(grouped).map((name) => ({
      name,
      products: grouped[name],
    }));
  }

  // שינוי לשונית פעילה
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // הוספת מוצר לסל
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showPopup(`${product.name} נוסף לסל!`);
  }

  // הצגת התראה
  private showPopup(message: string): void {
    this.popupMessage = message;
    this.popupVisible = true;

    setTimeout(() => {
      this.popupVisible = false;
    }, 3000); // התראה למשך 3 שניות
  }
}
