import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService, IBookItem } from '../../services/book.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book',
  template: `
    <div class="search-box">
      <button mdButton (click)="stepbackInHistory()">Back</button>
      <button mdButton (click)="addToCart()" *ngIf="bookId != '' && !notFound">Add To Cart</button>
      <span *ngIf="itemIsAlreadyInCart">This book is already in your cart</span>
      <button mdButton (click)="removeFromCart()" *ngIf="itemIsAlreadyInCart">Remove From Cart</button>
    </div>
    <div *ngIf="bookId == '' && !notFound">
      Please wait loading...
    </div>
    <div *ngIf="bookId != '' && notFound">
      Not found
    </div>
    <md-card class="card" *ngIf="bookId != '' && !notFound">
      <md-card-title>{{ this.item.volumeInfo.title }}</md-card-title>
      <md-card-content>
        <p>Written by {{ (this.item.volumeInfo.authors || []).join(" & ") || "Anonymus" }}</p>

        <img alt="" src="" [src]="this.item.volumeInfo.imageLinks['thumbnail']" *ngIf="this.item.volumeInfo.imageLinks" />
        
        <h3>Description:</h3>
        <div class="book-description" [innerHTML]=" this.item.volumeInfo.description || '<p>No Description</p>' "></div>
      </md-card-content>
    </md-card>
  `
})
export class BookComponent implements OnInit {

  // Book's Id
  public bookId: string = "";

  // Generated Author (this is a concat from authors array)
  public author: string = "";

  // Generated Title
  public title: string = "";

  // BookItem
  public item: IBookItem;

  // Flag what tells the book is exists in the google's book records
  public notFound: boolean = false;

  // Item Is in our cart?
  public itemIsAlreadyInCart: boolean = false;

  
  constructor( private bookService: BookService, private cartService: CartService,
    private route: ActivatedRoute, private _location: Location ) { }

  ngOnInit() {
    // Set Cart Flag to false
    this.itemIsAlreadyInCart = false;

    // If the route change we will get that
    this.route.params.subscribe(
      (params) => {
        // Get bookId from params if not exists give me an empty string
        var bookId = params.bookId || "";

        // bookId is empty?
        if (bookId != "") {

          // Ask Google's API for the book
          this.bookService.getBookById(bookId).then( (items) => {
            if (items.length > 0) {
              // The book found
              this.bookId = bookId;
              this.item = items[0];
              this.author = (this.item.volumeInfo.authors || []).join(" & ");
              this.title = this.author + (this.author != "" ? " - " : "") + this.item.volumeInfo.title;
              this.notFound = false;
              this.itemIsAlreadyInCart = (this.cartService.getItemIndex(bookId) != -1);
            }
            else
            {
              // Book not found
              this.bookId = bookId;
              this.item = null;
              this.notFound = true;
            }
          });
        }
      }
    );
  }

  /**
   * Add Book To Cart
   */
  addToCart()
  {
    this.itemIsAlreadyInCart = true;
    this.cartService.addItem(this.item);
  }

  /**
   * Remove Book From Cart
   */
  removeFromCart()
  {
    this.itemIsAlreadyInCart = false;
    this.cartService.removeItem(this.item.id);
  }

  /**
   * Step back in the history
   */
  stepbackInHistory() {
    this._location.back();
  }
}
