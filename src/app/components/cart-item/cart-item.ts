import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../models/product-model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {

  private readonly cartService = inject(CartService);

  product = input.required<IProduct>();

  removeFromCart(){
    
  }
}
