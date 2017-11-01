import { Component, OnInit } from '@angular/core';
import { CartService, ICartItem } from '../../services/cart.service';
import { IBookItem } from '../../services/book.service';

@Component({
  selector: 'app-cart',
  template: `
  <table style="width: 100%;">
    <thead>
      <tr>
        <th style="text-align: left">Title</th>
        <th style="text-align: left;">Count</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items; let i = index">
        <td>{{ item.title }}</td>
        <td>
          <input type="number" min="0" [(ngModel)]="item.count" />
        </td>
        <td>
          <button mdButton (click)="setCount( item.id, i )">Set Count</button>
          <button mdButton (click)="removeFromCart( item.id )">Remove From Cart</button>
        </td>
      </tr>
    </tbody>
  </table>
  `
})
export class CartComponent implements OnInit {

  items: Array<ICartItem> = [];

  constructor( private cartService: CartService ) { }

  /**
   * Could not solve the AsyncPipe problem :(
   * 
   */
  ngOnInit() {
    this.cartService.items.subscribe( (items) => {
      // Change component's items to the current cart's items
      this.items = items;
    });

    // Ask for refresh the cart's items
    this.cartService.getItems();
  }

  /**
   * Set cart's item count
   * If the count is lower or equal with 0 it will remove the item from the cart
   * 
   * @param id string
   * @param currentIndex number
   */
  setCount(id: string, currentIndex: number) {
    // Get Item Index from cart
    // We use the same structure so the index will not be different
    let index = this.cartService.getItemIndex( id );

    // If the element does not exists or the index does not equal
    if (index < 0) {
      // Refresh cart's items and then return
      this.cartService.getItems();
      return;
    }

    if (this.items[currentIndex].count > 0) {
      this.cartService.setItemCount( id, this.items[currentIndex].count );
    }
    else {
      // If the count is zero or lower
      this.removeFromCart(id);
    }
  }

  /**
   * Removes a book from the cart
   * 
   * @param id string
   */
  removeFromCart(id: string) {
    this.cartService.removeItem(id);
  }
}
