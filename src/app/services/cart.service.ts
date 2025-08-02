import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([

    {
      id: 1,
      title: 'ras zebi',
      price: 109.95,
      image: 'https://www.imgworldstickets.com/',
      stock: 10,
    },
    {
      id: 2,
      title: 'T-shirt',
      price: 15.00,
      image: 'https://www.imgworldstickets.com/',
      stock: 0,
    },
    {
      id: 3,
      title: 'T-shirt',
      price: 35.00,
      image: 'https://www.imgworldstickets.com/',
      stock: 8,
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
  constructor() { }
}
