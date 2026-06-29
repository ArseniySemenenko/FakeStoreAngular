import { Component, inject, input, linkedSignal, signal } from '@angular/core';
import { IProduct } from '../../models/product-model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  private readonly cartService = inject(CartService);

  product = input.required<IProduct>();
  cart = this.cartService.getCart();

  isInCart = linkedSignal(() => {
    return this.cart.some(prod => prod.id === this.product().id);
  })

  addToCart(){
    this.cartService.addToCart(this.product());
    this.isInCart.set(true);
  }
}
