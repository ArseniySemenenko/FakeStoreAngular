import { Component, inject, input, linkedSignal } from '@angular/core';
import { IProduct } from '../../models/product-model';
import { CartService } from '../../services/cart-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  private readonly cartService = inject(CartService);

  product = input.required<IProduct>();

  isInCart = linkedSignal(() => {
    return this.cartService.isInCart(this.product());
  })

  addToCart(){
    this.cartService.addToCart(this.product());
    this.isInCart.set(true);
  }
}
