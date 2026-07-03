import { Component , inject , signal} from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CartItem } from '../cart-item/cart-item';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-modal-cart',
  imports: [CartItem],
  templateUrl: './modal-cart.html',
  styleUrl: './modal-cart.css',
})
export class ModalCart {
  private readonly cartService = inject(CartService);

  cart = signal(this.cartService.getCart());

  removeFromCart(id: number){
    this.cart.update(cart => cart.filter(card => card.id != id));
    this.cartService.removeFromCart(id);
  }
}
