import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { NewItemsPageComponent } from './new-items-page/new-items-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: ProductsViewComponent},
    {path:'category/:category', component: ProductsViewComponent},
    {path:'product/:id', component: ProductPageComponent},
    {path:'login', component: LoginPageComponent},
    {path:'signup', component: SignUpPageComponent},
    {path:'newitems', component: NewItemsPageComponent},
    {path:'informations', component: InformationPageComponent},
    {path:'favorite', component: FavoritePageComponent},
    {path:'shoppingcart', component: ShoppingCartPageComponent},
];
