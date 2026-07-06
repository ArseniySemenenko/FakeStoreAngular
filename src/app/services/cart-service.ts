import { effect, Service, signal } from '@angular/core';
import { IProduct } from '../models/product-model';

@Service()
export class CartService {

    private cartItems = signal<IProduct[]>(JSON.parse(localStorage.getItem('cart') ?? '[]'));
    readonly cart = this.cartItems.asReadonly();

    constructor(){
        effect(() => {
            localStorage.setItem('cart' , JSON.stringify(this.cartItems()))
        })
    }

    addToCart(product: IProduct){
        this.cartItems.update(cart => [...cart , product]);
    }

    removeFromCart(id: number){
        this.cartItems.update(cart => cart.filter(prod => prod.id !== id));
    }

    isInCart(product: IProduct){
        return this.cartItems().some(prod => prod.id === product.id);
    }
}
