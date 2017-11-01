import { Injectable } from '@angular/core';
import { IBookItem } from './book.service';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

export interface ICartItem {
  id: string;
  title: string;
  count: number;
  price: number;
};

@Injectable()
export class CartService {

  // todo: the cart becomes buggy when user use another borwser tab to add items to cart

  private CART_KEY: string = "cart";

  // Cart Items' Storage
  private cartItemStore: Array<ICartItem> = [];

  // For the broadcast the changes
  private cartItemSubject = new Subject<ICartItem[]>();

  // This variant should work with the ngFor + asyncPipe
  // so we don't have to create a variant in the component to list the elements and follow the changes 
  public items = this.cartItemSubject.asObservable();

  constructor() {
    // Get Items From the Cart
    this.getItems();
  }

  /**
   * Returns -1 if item not exists or the item's index
   * 
   * @param bookId string
   * @return number
   */
  getItemIndex(bookId: string): number
  {
    let r: number = -1;

    // Looking for an item in the cart which has same id as bookId
    this.cartItemStore.forEach( (item: ICartItem, index: number) => {
      if (item.id == bookId) {
        r = index;
      }
    });

    return r;
  }

  /**
   * This functions saves cartItemStore to the Local Storage
   * And Broadcast items to the subscribed functions
   */
  saveToLocalStorage(): void
  {
    // Save to local Storage
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(this.CART_KEY, JSON.stringify(this.cartItemStore));
    }

    // Broadcast changes to subscribed functions
    this.cartItemSubject.next(this.cartItemStore);
  }

  /**
   * This function add Item to the cart
   * and then broadcast the items to the subscribed functions
   * 
   * @param item IBookItem
   * @param count number
   */
  addItem(item: IBookItem, count: number = 1): void
  {
    // Add item to the cart or increase the count Of This Item
    let index: number = this.getItemIndex(item.id);
    if (index == -1) {
      // The Book does not exists in the cart, so we create a 
      let r: ICartItem = {
        id: item.id,
        title: item.volumeInfo.title || "",
        count: count,
        price: 0
      };
      this.cartItemStore.push( r );
    } else {
      // The Book exists, so we just add more to the cart
      this.cartItemStore[index].count += count;
    }

    this.saveToLocalStorage();
  }

  /**
   * This function set Item's count in the cart
   * and then broadcast the items to the subscribed functions
   * 
   * @param bookId string
   * @param count number
   */
  setItemCount(bookId: string, count: number = 1): void
  {
    // Add item to the cart or increase the count Of This Item
    let index: number = this.getItemIndex(bookId);
    if (index == -1) {
      return;
    }

    this.cartItemStore[index].count = count;
    this.saveToLocalStorage();
  }

  /**
   * This function asks cart Items from local Storage
   * and broadcast the found items to the subscribed functions
   */
  getItems(): void
  {
    // Read From local Storage
    if (typeof(Storage) !== "undefined") {
      this.cartItemStore = JSON.parse(localStorage.getItem(this.CART_KEY)) || [];
    }

    // Broadcast changes to subscribed functions
    this.cartItemSubject.next(this.cartItemStore);
  }

  /**
   * This function removes an item from the cart
   * @param bookId string
   */
  removeItem(bookId: string): void
  {
    let index: number = this.getItemIndex(bookId);
    if (index >= 0) {
      this.cartItemStore.splice(index, 1);

      this.saveToLocalStorage();
    }
  }

}
