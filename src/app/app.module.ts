import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ייבוא FormsModule
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminComponent } from './pages/admin/admin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ייבוא עבור אנימציות
import { ToastrModule } from 'ngx-toastr';
import { NotificationComponent } from './components/notification/notification.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    AdminComponent,
    NotificationComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // הוספת FormsModule
    BrowserAnimationsModule, // הוספת מודול אנימציות
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // מיקום ההתראה
      timeOut: 3000, // משך הזמן של ההתראה
      preventDuplicates: true, // מניעת כפילויות
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
