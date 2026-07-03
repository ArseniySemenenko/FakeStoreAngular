import { Service } from '@angular/core';
import { IProduct } from '../models/product-model';

@Service()
export class CartService {
    addToCart(product: IProduct){
        let cart = localStorage.getItem('cart');
        if(cart){
            let cartList = JSON.parse(cart);
            localStorage.setItem('cart' , JSON.stringify([...cartList , product]));
        }
        else{
            localStorage.setItem('cart' , JSON.stringify([product]));
        }
        let info = localStorage.getItem('cart');
    }

    removeFromCart(id: number){
        let cart = localStorage.getItem('cart');
        if(cart){
            let cartList: IProduct[] = JSON.parse(cart);
            let list = cartList.filter(prod => prod.id !== id)
            localStorage.setItem('cart' , JSON.stringify(list));
        }
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
