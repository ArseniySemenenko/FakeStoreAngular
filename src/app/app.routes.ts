import { Routes } from '@angular/router';
import { ModalCart } from './components/modal-cart/modal-cart';
import { ProductsList } from './components/products-list/products-list';
import { ProductDetails } from './components/product-details/product-details';
import { UserLogin } from './components/user-login/user-login';
import { AboutPage } from './components/about-page/about-page';

export const routes: Routes = [
    {path: "" , redirectTo: "catalog" , pathMatch: "full"},
    {path: "catalog" , component: ProductsList},
    {path: "catalog/:filter" , component: ProductsList},
    {path: 'cart' , component: ModalCart},
    {path: 'product/:id' , component: ProductDetails},
    {path: 'user' , component: UserLogin},
    {path: 'about' , component: AboutPage},
];
