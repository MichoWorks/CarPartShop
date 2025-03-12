import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  productId: string = ''; // תמיד יהיה מחרוזת
  products: Product[] = [];
  cart: Product[] = []; // משתנה שמחזיק את הסל

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProductsAndCurrentProduct();
    this.loadCart(); // טוען את המוצרים מהסל
  }

  loadProductsAndCurrentProduct(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loadCurrentProduct();
      },
      error: (err) => console.error('❌ שגיאה בטעינת רשימת מוצרים:', err),
    });
  }

  loadCurrentProduct(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || ''; // תמיד להבטיח ערך מחרוזתי
    this.product = this.products.find((p) => String(p.id) === this.productId);

    if (!this.product) {
      console.error('❌ מוצר לא נמצא:', this.productId);
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  goToNextProduct(): void {
    if (this.isLastProduct()) {
      alert('🚨 זהו המוצר האחרון ברשימה!');
      return;
    }
    
    const currentIndex = this.products.findIndex((p) => String(p.id) === this.productId);
    if (currentIndex !== -1 && currentIndex < this.products.length - 1) {
      const nextProduct = this.products[currentIndex + 1];
      this.router.navigate(['/products', nextProduct.id]).then(() => {
        this.loadCurrentProduct();
      });
    }
  }

  goToPreviousProduct(): void {
    if (this.isFirstProduct()) {
      alert('🚨 זהו המוצר הראשון ברשימה!');
      return;
    }

    const currentIndex = this.products.findIndex((p) => String(p.id) === this.productId);
    if (currentIndex > 0) {
      const prevProduct = this.products[currentIndex - 1];
      this.router.navigate(['/products', prevProduct.id]).then(() => {
        this.loadCurrentProduct();
      });
    }
  }

  isFirstProduct(): boolean {
    const currentIndex = this.products.findIndex((p) => String(p.id) === this.productId);
    return currentIndex === 0;
  }

  isLastProduct(): boolean {
    const currentIndex = this.products.findIndex((p) => String(p.id) === this.productId);
    return currentIndex === this.products.length - 1;
  }

  addToCart(): void {
    if (this.product) {
      // בודק אם המוצר כבר נמצא בסל
      const existingProduct = this.cart.find(p => p.id === this.product!.id);
      if (existingProduct) {
        alert(`🛒 המוצר "${this.product.name}" כבר נמצא בסל!`);
        return;
      }

      this.cart.push(this.product);
      this.saveCart(); // שמור את הסל ב-localStorage
      console.log(`🛒 המוצר ${this.product.name} נוסף לסל!`, this.cart);
      alert(`🛒 המוצר "${this.product.name}" נוסף לסל!`);
    }
  }

  loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
