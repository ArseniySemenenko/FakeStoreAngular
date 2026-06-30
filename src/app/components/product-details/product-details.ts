import { Component , inject, input, linkedSignal, OnInit, signal, Signal } from '@angular/core';
import { IProduct } from '../../models/product-model';
import { ProductService } from '../../services/product-service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit{

  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  id = input<number>(0);
  
  product = signal<IProduct>({} as IProduct);
  isInCart = linkedSignal(() => {
    return this.cartService.isInCart(this.product());
  })

  ngOnInit(){
    this.productService.getProduct(this.id())
    .subscribe(prod => {
      this.product.set(prod);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.product());
    this.isInCart.set(true);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product().id);
    this.isInCart.set(false);
  }
}
