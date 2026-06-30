import { HttpClient } from '@angular/common/http';
import { Service , inject } from '@angular/core';
import { IProduct } from '../models/product-model';

@Service()
export class ProductService {
    private readonly http = inject(HttpClient);

    private readonly baseUrl = 'https://fakestoreapi.com';

    getProdutcs(){
        return this.http.get<IProduct[]>(`${this.baseUrl}/products`);
    }

    getProduct(id: number){
        return this.http.get<IProduct>(`${this.baseUrl}/products/${id}`);
    }
}
