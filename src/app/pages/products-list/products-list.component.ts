import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ ProductCardComponent ],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id){
        <app-product-card [product]="product" />
}
    </div>
`,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id:1,
      title: 'ras zebi',
      price: 109.95,
      image: 'https://www.imgworldstickets.com/',
      stock: 10,
    },
    {
      id:2,
      title: 'T-shirt',
      price: 15.00,
      image: 'https://www.imgworldstickets.com/',
      stock: 0,
    },
    {
      id:3,
      title: 'T-shirt',
      price: 35.00,
      image: 'https://www.imgworldstickets.com/',
      stock: 8,
    },
    {
      id:4,
      title: 'kwala',
      price: 333.05,
      image: 'https://www.facebook.com/photo.php?fbid=2178691465486566&id=1911510932204622&set=a.1911672332188482',
      stock: 1,
    },
  ]);
}
