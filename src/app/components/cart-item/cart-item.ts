import { Component, input } from '@angular/core';
import { IProduct } from '../../models/product-model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  product = input.required<IProduct>();
}
