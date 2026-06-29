import { Service } from '@angular/core';
import { IProduct } from '../models/product-model';

@Service()
export class CartService {
    addToCart(product: IProduct){
        let cart = localStorage.getItem('cart');
        if(cart){
            let cartList = JSON.parse(cart);
            console.log(cartList)
            localStorage.setItem('cart' , JSON.stringify([...cartList , product]));
        }
        else{
            localStorage.setItem('cart' , JSON.stringify([product]));
        }
        let info = localStorage.getItem('cart');
        if(info) console.log(info)
    }

    getCart(): IProduct[]{
        let data = localStorage.getItem('cart');
        if(data){
            return JSON.parse(data);
        }else{
            return [];
        }
    }

    isInCart(product: IProduct){
        let cart = this.getCart();
        return cart.some(prod => prod.id === product.id);
    }
}
