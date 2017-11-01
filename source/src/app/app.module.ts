import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.config';

import { CartService } from './services/cart.service';
import { BookService } from './services/book.service';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    // Components
    AppComponent, NavbarComponent, CartComponent, SearchComponent, BookComponent
  ],
  imports: [

    // Routing
    RouterModule.forRoot(
      AppRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),

    // Angular Materials' Modules
    // todo: Angular Material does not work it should be checked why
    MatCardModule,
    MatCommonModule,
    MatButtonModule,
    MatToolbarModule,

    // Angular Modules
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    // Services
    CartService, BookService
  ],
  bootstrap: [
    // The Main Component
    AppComponent
  ]
})

// This file is compiled after changes if we have a class in this
export class AppModule { }
