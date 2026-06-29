import { Routes } from '@angular/router';
import { ModalCart } from './components/modal-cart/modal-cart';
import { ProductsList } from './components/products-list/products-list';

export const routes: Routes = [
    {path: "" , component: ProductsList},
    {path: 'cart' , component: ModalCart},
];
