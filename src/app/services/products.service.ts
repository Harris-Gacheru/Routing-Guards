import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      name: 'Hard Drive',
      price: 45
    },
    {
      name: 'Keyboard',
      price: 25
    },
    {
      name: 'Mouse',
      price: 15
    }
  ]

  constructor() { }

  addProduct(product: Product): void{
    this.products.push(product)
  }

  getProducts(): Product[]{
    return this.products
  }
}
