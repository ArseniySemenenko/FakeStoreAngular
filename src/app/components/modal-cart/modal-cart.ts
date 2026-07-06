import { Component , inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-modal-cart',
  imports: [CartItem],
  templateUrl: './modal-cart.html',
  styleUrl: './modal-cart.css',
})
export class ModalCart{
  private readonly cartService = inject(CartService);

  //cart = signal(this.cartService.getCart());

  cart = this.cartService.cart;

  removeFromCart(id: number){
    //this.cart.update(cart => cart.filter(card => card.id != id));
    this.cartService.removeFromCart(id);
  }
}
