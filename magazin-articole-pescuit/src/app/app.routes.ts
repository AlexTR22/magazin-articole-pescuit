import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

export const routes: Routes = [
    {path:'', component: ProductsViewComponent},
    {path:'product/:id', component: ProductPageComponent},
    {path:'login', component: LoginPageComponent},
    {path:'signup', component: SignUpPageComponent},
];
