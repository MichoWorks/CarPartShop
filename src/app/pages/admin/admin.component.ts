import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orders: any[] = [];
  users: any[] = [];
  products: any[] = [];
  activeTab: string = 'orders';
  editMode: boolean = false;
  editForm!: FormGroup; // Initialize as non-nullable
  currentEditItem: any = null;
  editingUser: boolean = false;
  editingProduct: boolean = false;

  constructor(private adminService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadUsers();
    this.loadProducts();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.resetEditMode();
  }

  private loadOrders(): void {
    this.adminService.getOrders().subscribe((data: any[]) => {
      this.orders = data;
    });
  }

  private loadUsers(): void {
    this.adminService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  private loadProducts(): void {
    this.adminService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  startEditing(item: any, type: 'user' | 'product'): void {
    this.editMode = true;
    this.currentEditItem = item;

    if (type === 'user') {
      this.editingUser = true;
      this.editingProduct = false;
      this.editForm = this.fb.group({
        username: [item.username, Validators.required],
        email: [item.email, [Validators.required, Validators.email]],
        role: [item.role, Validators.required],
      });
    } else if (type === 'product') {
      this.editingProduct = true;
      this.editingUser = false;
      this.editForm = this.fb.group({
        name: [item.name, Validators.required],
        price: [item.price, [Validators.required, Validators.min(0)]],
        category: [item.category, Validators.required],
        description: [item.description],
      });
    }
  }

  saveEdit(): void {
    if (this.editForm && this.editForm.valid) {
      const updatedItem = { ...this.currentEditItem, ...this.editForm.value };
      if (this.editingUser) {
        this.adminService.updateUser(updatedItem).subscribe(() => {
          const index = this.users.findIndex((user) => user.id === updatedItem.id);
          if (index !== -1) this.users[index] = updatedItem;
          this.resetEditMode();
        });
      } else if (this.editingProduct) {
        this.adminService.updateProduct(updatedItem).subscribe(() => {
          const index = this.products.findIndex((product) => product.id === updatedItem.id);
          if (index !== -1) this.products[index] = updatedItem;
          this.resetEditMode();
        });
      }
    }
  }

  cancelEdit(): void {
    this.resetEditMode();
  }

  private resetEditMode(): void {
    this.editMode = false;
    this.editingUser = false;
    this.editingProduct = false;
    this.currentEditItem = null;
    this.editForm = this.fb.group({}); // Reset the form to avoid null issues
  }

  deleteUser(userId: number): void {
    this.adminService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== userId);
    });
  }

  deleteProduct(productId: number): void {
    this.adminService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== productId);
    });
  }
}
