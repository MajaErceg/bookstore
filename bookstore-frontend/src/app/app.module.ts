import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './orders/cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';

import { InsertComponent } from './insert/insert.component';
import { InsertBookComponent } from './insert/insert-book/insert-book.component';
import { InsertGiftComponent } from './insert/insert-gift/insert-gift.component';
import { InsertKidsComponent } from './insert/insert-kids/insert-kids.component';
import { InsertSchoolComponent } from './insert/insert-school/insert-school.component';
import { InsertAccessoryComponent } from './insert/insert-accessory/insert-accessory.component';

import { UpdateAccessoryComponent } from './update/update-accessory/update-accessory.component';
import { UpdateBookComponent } from './update/update-book/update-book.component';
import { UpdateGiftComponent } from './update/update-gift/update-gift.component';
import { UpdateKidsComponent } from './update/update-kids/update-kids.component';
import { UpdateSchoolComponent } from './update/update-school/update-school.component';

import { GiftsComponent } from './products/gifts/gifts.component';
import { ForKidsComponent } from './products/for-kids/for-kids.component';
import { BooksComponent } from './products/books/books.component';
import { SchoolSuppliesComponent } from './products/school-supplies/school-supplies.component';
import { ArtisticAccessoriesComponent } from './products/artistic-accessories/artistic-accessories.component';

import { MyAccessoriesComponent } from './my-products/my-accessories/my-accessories.component';
import { MyKidsComponent } from './my-products/my-kids/my-kids.component';
import { MySchoolComponent } from './my-products/my-school/my-school.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyBooksComponent } from './my-products/my-books/my-books.component';
import { MyGiftsComponent } from './my-products/my-gifts/my-gifts.component';

import { PageKidsComponent } from './single-pages/page-kids/page-kids.component';
import { PageBookComponent } from './single-pages/page-book/page-book.component';
import { PageGiftComponent } from './single-pages/page-gift/page-gift.component';
import { PageAccessoryComponent } from './single-pages/page-accessory/page-accessory.component';
import { PageSchoolComponent } from './single-pages/page-school/page-school.component';

import { InterceptorsService } from './interceptors.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    OrdersComponent,
    CartComponent,
    ProfileComponent,
    InsertBookComponent,
    InsertGiftComponent,
    InsertKidsComponent,
    InsertSchoolComponent,
    InsertAccessoryComponent,

    UpdateAccessoryComponent,
    UpdateBookComponent,
    UpdateGiftComponent,
    UpdateKidsComponent,
    UpdateSchoolComponent,

    GiftsComponent,
    ForKidsComponent,
    BooksComponent,
    SchoolSuppliesComponent,
    ArtisticAccessoriesComponent,
    MyAccessoriesComponent,
    MyKidsComponent,
    MySchoolComponent,

    PageKidsComponent,
    PageBookComponent,
    PageGiftComponent,
    PageAccessoryComponent,
    PageSchoolComponent,
    MyProductsComponent,
    MyGiftsComponent,
    MyBooksComponent,
    
    MyOrdersComponent,
    InsertComponent
    
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
