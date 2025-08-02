import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
  <div>
    <h2 class="text-2xl">Shoping Cart</h2>
    @for (item of cartService.cart(); track item.id){
      <app-cart-item [item]="item"/>
    }
  </div>
`,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
