import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // רשימת מוצרים
  categories: { name: string; products: Product[]; sortedProducts: Product[] }[] = []; // קטגוריות מוצרים
  activeTab: string = ''; // הלשונית הפעילה
  popupVisible: boolean = false;
  popupMessage: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.categorizeProducts();
      if (this.categories.length > 0) {
        this.activeTab = this.categories[0].name;
      }
    });
  }

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
      sortedProducts: [...grouped[name]], // ברירת מחדל - ללא מיון
    }));
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  sortProducts(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const sortType = target.value;

    this.categories.forEach((category) => {
      switch (sortType) {
        case 'priceAsc':
          category.sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'priceDesc':
          category.sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'nameAsc':
          category.sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'nameDesc':
          category.sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          category.sortedProducts = [...category.products]; // חזרה למצב המקורי
      }
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showPopup(`${product.name} נוסף לסל!`);
  }

  private showPopup(message: string): void {
    this.popupMessage = message;
    this.popupVisible = true;

    setTimeout(() => {
      this.popupVisible = false;
    }, 3000);
  }
}
