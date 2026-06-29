import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../models/product-model';
import { ProductCard } from '../product-card/product-card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit{
  private readonly productsService = inject(ProductService);

  products = signal<IProduct[]>([]);
  display = linkedSignal<IProduct[]>(() => {
    return this.products().filter(product => {
      if(this.filter() === "men") return product.category === "men's clothing"
      return product.category.includes(this.filter())
    });
  })
  filter = signal<string>("");

  ngOnInit(){
    this.productsService.getProdutcs()
    .subscribe((res) => {
      this.products.set([...res]);
    })
  }

}
