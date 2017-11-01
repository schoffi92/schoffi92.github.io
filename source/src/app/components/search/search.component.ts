import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, IBookItem } from "../../services/book.service";

@Component({
  selector: 'app-search',
  template: `
  <div class="search-box">
    <input mdInput placeholder="Book Name" [(ngModel)]="searchFieldValue" />
    <button mdButton [routerLink]="['/search', searchFieldValue]">
      Search
    </button>
  </div>

  <div *ngFor="let item of items" class="books items">
    <md-card class="card">
      <md-card-title [routerLink]="['/book/', item.id]">
          {{ item.volumeInfo.title }}
      </md-card-title>
    </md-card>
  </div>
  `
})
export class SearchComponent implements OnInit {

  // Search Field
  searchFieldValue: string = "";

  // Books
  items: Array<IBookItem> = [];

  constructor( private bookService: BookService, private route: ActivatedRoute ) { }

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
              this.items = items;
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

}
