import { Component , inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CartItem } from '../cart-item/cart-item';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-modal-cart',
  imports: [CartItem, RouterLink],
  templateUrl: './modal-cart.html',
  styleUrl: './modal-cart.css',
})
export class ModalCart {
  private readonly cartService = inject(CartService);

  cart = this.cartService.getCart();
}
