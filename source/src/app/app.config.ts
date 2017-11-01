import { RouterModule, Routes } from '@angular/router';
import { OpaqueToken } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { BookComponent } from './components/book/book.component';

/**
 * Application's routes
 */
export const AppRoutes: Routes = [
    { path: 'home', component: SearchComponent },
    { path: 'cart', component: CartComponent },
    { path: 'search/:keyword', component: SearchComponent },
    { path: 'book/:bookId', component: BookComponent },

    // If there is no route for the current URL load SearchComponent
    { path: '**', component: SearchComponent }
];

// This file is compiled after changes if we have a class in this
export class AppConfig {}