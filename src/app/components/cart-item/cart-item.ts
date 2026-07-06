import { Component, inject, input , output } from '@angular/core';
import { IProduct } from '../../models/product-model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {

  readonly cartService = inject(CartService);

  product = input.required<IProduct>();

  remove = output<number>();
}
