import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";

import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ProductsComponent } from "./products/products.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProfileComponent } from "./profile/profile.component";
import { UpdateBookComponent } from "./update/update-book/update-book.component";
import { PageBookComponent } from "./single-pages/page-book/page-book.component";
import { PageAccessoryComponent } from "./single-pages/page-accessory/page-accessory.component";
import { UpdateAccessoryComponent } from "./update/update-accessory/update-accessory.component";
import { PageSchoolComponent } from "./single-pages/page-school/page-school.component";
import { UpdateSchoolComponent } from "./update/update-school/update-school.component";
import { UpdateGiftComponent } from "./update/update-gift/update-gift.component";
import { PageGiftComponent } from "./single-pages/page-gift/page-gift.component";
import { InsertComponent } from "./insert/insert.component";
import { MyProductsComponent } from "./my-products/my-products.component";
import { PageKidsComponent } from "./single-pages/page-kids/page-kids.component";

import { UpdateKidsComponent } from "./update/update-kids/update-kids.component";

const rute: Routes = [

    //{path: 'update-kids', component: UpdateKidsComponent},
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'orders', component: OrdersComponent},

    {path: 'insert', component: InsertComponent, canActivate: [AuthGuard]},
    {path: 'cart', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'books/oneBook/:id', component: PageBookComponent},

    
    {path: 'books/updateBook/:id', component: UpdateBookComponent, canActivate: [AuthGuard]},
    {path: 'artisticAccessories/oneArtisticAccessory/:id', component: PageAccessoryComponent},
    {path: 'artisticAccessories/updateArtisticAccessory/:id', component: UpdateAccessoryComponent, canActivate: [AuthGuard]},
    {path: 'schoolSupplies/oneSchoolSupplies/:id', component: PageSchoolComponent},
    {path: 'schoolSupplies/updateSchoolSupplies/:id', component: UpdateSchoolComponent, canActivate: [AuthGuard]},
    {path: 'gifts/oneGift/:id', component: PageGiftComponent},
    {path: 'gifts/updateGift/:id', component: UpdateGiftComponent, canActivate: [AuthGuard]},

    {path: 'forKids/oneForKids/:id', component: PageKidsComponent},
    {path: 'forKids/updateForKids/:id', component: UpdateKidsComponent, canActivate: [AuthGuard]},

    {path: 'myproducts', component: MyProductsComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
]


@NgModule({
    imports: [
        RouterModule.forRoot(rute) 
    ],

    exports:[
      RouterModule 
    ]

})

export class RoutingModule {}