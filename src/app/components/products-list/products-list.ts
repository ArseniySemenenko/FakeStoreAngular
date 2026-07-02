import { Component, inject, linkedSignal, OnInit, signal , input} from '@angular/core';
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

  filter = input<string>("");
  sort = input<string>("");
  from = input<number>(0);
  to = input<number>(1000);

  display = linkedSignal<IProduct[]>(() => {
    /*if(!this.filter()) return this.products();
    return this.products().filter(product => {
      if(this.filter() === "men") return product.category === "men's clothing"
      return product.category.includes(this.filter())
    });*/

    let products = this.products();

    if(this.filter()){
      if(this.filter() === "men"){
        products = products.filter(p => p.category === "men's clothing");
      }
      products = products.filter(p => p.category.includes(this.filter()));
    }

    if(this.sort()){
      console.log(this.sort());
      switch(this.sort()){
        case "asc":
          products = products.sort((a, b) => a.price - b.price);
          break;
        case "desc":
          products = products.sort((a, b) => b.price - a.price)
          break;
        case "alph-up":
          products = products.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "alph-down":
          products = products.sort((a, b) => b.title.localeCompare(a.title));
      }
    }

    if(this.from()){
      console.log(this.from())
      products = products.filter(p => p.price >= this.from());
    }

    if(this.to()){
      console.log(this.to())
      products = products.filter(p => p.price <= this.to());
    }

    return products;
  })

  ngOnInit(){
    this.productsService.getProdutcs()
    .subscribe((res) => {
      this.products.set([...res]);
    })
  }
}
