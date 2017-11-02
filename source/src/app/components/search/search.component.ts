import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, IBookItem } from "../../services/book.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-search',
  template: `
  <div class="search-box">
    <input mdInput placeholder="Book Name" [(ngModel)]="searchFieldValue" />
    <button mdButton [routerLink]="['/search', searchFieldValue]">
      Search
    </button>
  </div>


  <table style="width: 100%;" *ngIf="items.length > 0">
    <tr>
      <th style="text-align: left;">
        Title
      </th>
      <th>
        
      </th>
    </tr>
    <tr *ngFor="let item of items; let i = index">
      <td [routerLink]="['/book/', item.id]">
        {{ item.volumeInfo.title }}
      </td>
      <td>
        <button mdButton (click)="addToCart( i )">Add To Cart</button>
        <button mdButton (click)="removeFromCart( i )" *ngIf="item.inCart">Remove From Cart</button>
      </td>
    </tr>
  </table>
  `
})
export class SearchComponent implements OnInit {

  // Search Field
  public searchFieldValue: string = "";

  // Books
  public items: Array<IBookItem> = [];

  constructor( private cartService: CartService, private bookService: BookService, private route: ActivatedRoute ) { }

  ngOnInit()
  {
    // Subscribe to the route params' changes
    this.route.params.subscribe(
      (params) => {
        
        if (params.keyword)
        {
          // If the keyword exists
          this.searchFieldValue = params.keyword;

          // Asks Books from Google's API
          this.bookService.getBooks(params.keyword).then( (items) => {
              this.items = items.map( (item) => {
                item.inCart = this.cartService.getItemIndex( item.id ) != -1;
                return item;
              });
          });
        }
        else
        {
          // keyword does not exists
          // So there is no item
          this.items = [];
        }
      }
    )
  }

  /**
   * Add Book To Cart
   */
  addToCart(index: number)
  {
    this.cartService.addItem(this.items[index]);
    this.items[index].inCart = true;
  }

  /**
   * Remove Book From Cart
   */
  removeFromCart(index: number)
  {
    this.cartService.removeItem(this.items[index].id);
    this.items[index].inCart = false;
  }
}
