webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* unused harmony export AppConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_book_book_component__ = __webpack_require__("../../../../../src/app/components/book/book.component.ts");



/**
 * Application's routes
 */
var AppRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_0__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'search/:keyword', component: __WEBPACK_IMPORTED_MODULE_1__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'book/:bookId', component: __WEBPACK_IMPORTED_MODULE_2__components_book_book_component__["a" /* BookComponent */] },
    // If there is no route for the current URL load SearchComponent
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_search_search_component__["a" /* SearchComponent */] }
];
// This file is compiled after changes if we have a class in this
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_book_book_component__ = __webpack_require__("../../../../../src/app/components/book/book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    // This file is compiled after changes if we have a class in this
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            // Components
            __WEBPACK_IMPORTED_MODULE_10__components_app_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_12__components_cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_14__components_book_book_component__["a" /* BookComponent */]
        ],
        imports: [
            // Routing
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppRoutes */]),
            // Angular Materials' Modules
            // todo: Angular Material does not work it should be checked why
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatToolbarModule */],
            // Angular Modules
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            // Services
            __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_9__services_book_service__["a" /* BookService */]
        ],
        bootstrap: [
            // The Main Component
            __WEBPACK_IMPORTED_MODULE_10__components_app_app_component__["a" /* AppComponent */]
        ]
    })
    // This file is compiled after changes if we have a class in this
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "\n    <navbar></navbar>\n    <div>\n        <router-outlet></router-outlet>\n    </div>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookComponent = (function () {
    function BookComponent(bookService, cartService, route, _location) {
        this.bookService = bookService;
        this.cartService = cartService;
        this.route = route;
        this._location = _location;
        // Book's Id
        this.bookId = "";
        // Generated Author (this is a concat from authors array)
        this.author = "";
        // Generated Title
        this.title = "";
        // Flag what tells the book is exists in the google's book records
        this.notFound = false;
        // Item Is in our cart?
        this.itemIsAlreadyInCart = false;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set Cart Flag to false
        this.itemIsAlreadyInCart = false;
        // If the route change we will get that
        this.route.params.subscribe(function (params) {
            // Get bookId from params if not exists give me an empty string
            var bookId = params.bookId || "";
            // bookId is empty?
            if (bookId != "") {
                // Ask Google's API for the book
                _this.bookService.getBookById(bookId).then(function (items) {
                    if (items.length > 0) {
                        // The book found
                        _this.bookId = bookId;
                        _this.item = items[0];
                        _this.author = (_this.item.volumeInfo.authors || []).join(" & ");
                        _this.title = _this.author + (_this.author != "" ? " - " : "") + _this.item.volumeInfo.title;
                        _this.notFound = false;
                        _this.itemIsAlreadyInCart = (_this.cartService.getItemIndex(bookId) != -1);
                    }
                    else {
                        // Book not found
                        _this.bookId = bookId;
                        _this.item = null;
                        _this.notFound = true;
                    }
                });
            }
        });
    };
    /**
     * Add Book To Cart
     */
    BookComponent.prototype.addToCart = function () {
        this.itemIsAlreadyInCart = true;
        this.cartService.addItem(this.item);
    };
    /**
     * Remove Book From Cart
     */
    BookComponent.prototype.removeFromCart = function () {
        this.itemIsAlreadyInCart = false;
        this.cartService.removeItem(this.item.id);
    };
    /**
     * Step back in the history
     */
    BookComponent.prototype.stepbackInHistory = function () {
        this._location.back();
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        template: "\n    <div class=\"search-box\">\n      <button mdButton (click)=\"stepbackInHistory()\">Back</button>\n      <button mdButton (click)=\"addToCart()\" *ngIf=\"bookId != '' && !notFound\">Add To Cart</button>\n      <span *ngIf=\"itemIsAlreadyInCart\">This book is already in your cart</span>\n      <button mdButton (click)=\"removeFromCart()\" *ngIf=\"itemIsAlreadyInCart\">Remove From Cart</button>\n    </div>\n    <div *ngIf=\"bookId == '' && !notFound\">\n      Please wait loading...\n    </div>\n    <div *ngIf=\"bookId != '' && notFound\">\n      Not found\n    </div>\n    <md-card class=\"card\" *ngIf=\"bookId != '' && !notFound\">\n      <md-card-title>{{ this.item.volumeInfo.title }}</md-card-title>\n      <md-card-content>\n        <p>Written by {{ (this.item.volumeInfo.authors || []).join(\" & \") || \"Anonymus\" }}</p>\n\n        <img alt=\"\" src=\"\" [src]=\"this.item.volumeInfo.imageLinks['thumbnail']\" *ngIf=\"this.item.volumeInfo.imageLinks\" />\n        \n        <h3>Description:</h3>\n        <div class=\"book-description\" [innerHTML]=\" this.item.volumeInfo.description || '<p>No Description</p>' \"></div>\n      </md-card-content>\n    </md-card>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _d || Object])
], BookComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.items = [];
    }
    /**
     * Could not solve the AsyncPipe problem :(
     *
     */
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.items.subscribe(function (items) {
            // Change component's items to the current cart's items
            _this.items = items;
        });
        // Ask for refresh the cart's items
        this.cartService.getItems();
    };
    /**
     * Set cart's item count
     * If the count is lower or equal with 0 it will remove the item from the cart
     *
     * @param id string
     * @param currentIndex number
     */
    CartComponent.prototype.setCount = function (id, currentIndex) {
        // Get Item Index from cart
        // We use the same structure so the index will not be different
        var index = this.cartService.getItemIndex(id);
        // If the element does not exists or the index does not equal
        if (index < 0) {
            // Refresh cart's items and then return
            this.cartService.getItems();
            return;
        }
        if (this.items[currentIndex].count > 0) {
            this.cartService.setItemCount(id, this.items[currentIndex].count);
        }
        else {
            // If the count is zero or lower
            this.removeFromCart(id);
        }
    };
    /**
     * Removes a book from the cart
     *
     * @param id string
     */
    CartComponent.prototype.removeFromCart = function (id) {
        this.cartService.removeItem(id);
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: "\n  <table style=\"width: 100%;\">\n    <thead>\n      <tr>\n        <th style=\"text-align: left\">Title</th>\n        <th style=\"text-align: left;\">Count</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of items; let i = index\">\n        <td>{{ item.title }}</td>\n        <td>\n          <input type=\"number\" min=\"0\" [(ngModel)]=\"item.count\" />\n        </td>\n        <td>\n          <button mdButton (click)=\"setCount( item.id, i )\">Set Count</button>\n          <button mdButton (click)=\"removeFromCart( item.id )\">Remove From Cart</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar',
        template: "\n  <md-toolbar color=\"primary\">\n    <button mdButton routerLink=\"/home\">Home</button>\n    <button mdButton routerLink=\"/cart\">Cart</button>\n  </md-toolbar>\n  "
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(cartService, bookService, route) {
        this.cartService = cartService;
        this.bookService = bookService;
        this.route = route;
        // Search Field
        this.searchFieldValue = "";
        // Books
        this.items = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to the route params' changes
        this.route.params.subscribe(function (params) {
            if (params.keyword) {
                // If the keyword exists
                _this.searchFieldValue = params.keyword;
                // Asks Books from Google's API
                _this.bookService.getBooks(params.keyword).then(function (items) {
                    _this.items = items.map(function (item) {
                        item.inCart = _this.cartService.getItemIndex(item.id) != -1;
                        return item;
                    });
                });
            }
            else {
                // keyword does not exists
                // So there is no item
                _this.items = [];
            }
        });
    };
    /**
     * Add Book To Cart
     */
    SearchComponent.prototype.addToCart = function (index) {
        this.cartService.addItem(this.items[index]);
        this.items[index].inCart = true;
    };
    /**
     * Remove Book From Cart
     */
    SearchComponent.prototype.removeFromCart = function (index) {
        this.cartService.removeItem(this.items[index].id);
        this.items[index].inCart = false;
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: "\n  <div class=\"search-box\">\n    <input mdInput placeholder=\"Book Name\" [(ngModel)]=\"searchFieldValue\" />\n    <button mdButton [routerLink]=\"['/search', searchFieldValue]\">\n      Search\n    </button>\n  </div>\n\n\n  <table style=\"width: 100%;\" *ngIf=\"items.length > 0\">\n    <tr>\n      <th style=\"text-align: left;\">\n        Title\n      </th>\n      <th>\n        \n      </th>\n    </tr>\n    <tr *ngFor=\"let item of items; let i = index\">\n      <td [routerLink]=\"['/book/', item.id]\">\n        {{ item.volumeInfo.title }}\n      </td>\n      <td>\n        <button mdButton (click)=\"addToCart( i )\">Add To Cart</button>\n        <button mdButton (click)=\"removeFromCart( i )\" *ngIf=\"item.inCart\">Remove From Cart</button>\n      </td>\n    </tr>\n  </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        // The API's url
        this.API_URL = 'https://www.googleapis.com/books/v1/';
    }
    /**
     * get Book by it's Id
     *
     * @param id string
     * @returns Promise<IBookItem[]>
     */
    BookService.prototype.getBookById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + "volumes/" + id).subscribe(function (response) {
                resolve([response.json()]);
            }, function (error) {
                console.log(error);
                resolve([]);
            });
        });
    };
    /**
     * get Books with search quilting
     *
     * @param query string
     * @returns Promise<IBookItem[]>
     */
    BookService.prototype.getBooks = function (query) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        params.set('q', query);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]();
        requestOptions.params = params;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + "volumes", requestOptions).subscribe(function (response) {
                resolve(response.json().items);
            }, function (error) {
                resolve([]);
            });
        });
    };
    return BookService;
}());
BookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var CartService = (function () {
    function CartService() {
        // todo: the cart becomes buggy when user use another borwser tab to add items to cart
        this.CART_KEY = "cart";
        // Cart Items' Storage
        this.cartItemStore = [];
        // For the broadcast the changes
        this.cartItemSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Subject */]();
        // This variant should work with the ngFor + asyncPipe
        // so we don't have to create a variant in the component to list the elements and follow the changes 
        this.items = this.cartItemSubject.asObservable();
        // Get Items From the Cart
        this.getItems();
    }
    /**
     * Returns -1 if item not exists or the item's index
     *
     * @param bookId string
     * @return number
     */
    CartService.prototype.getItemIndex = function (bookId) {
        var r = -1;
        // Looking for an item in the cart which has same id as bookId
        this.cartItemStore.forEach(function (item, index) {
            if (item.id == bookId) {
                r = index;
            }
        });
        return r;
    };
    /**
     * This functions saves cartItemStore to the Local Storage
     * And Broadcast items to the subscribed functions
     */
    CartService.prototype.saveToLocalStorage = function () {
        // Save to local Storage
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.CART_KEY, JSON.stringify(this.cartItemStore));
        }
        // Broadcast changes to subscribed functions
        this.cartItemSubject.next(this.cartItemStore);
    };
    /**
     * This function add Item to the cart
     * and then broadcast the items to the subscribed functions
     *
     * @param item IBookItem
     * @param count number
     */
    CartService.prototype.addItem = function (item, count) {
        if (count === void 0) { count = 1; }
        // Add item to the cart or increase the count Of This Item
        var index = this.getItemIndex(item.id);
        if (index == -1) {
            // The Book does not exists in the cart, so we create a 
            var r = {
                id: item.id,
                title: item.volumeInfo.title || "",
                count: count,
                price: 0
            };
            this.cartItemStore.push(r);
        }
        else {
            // The Book exists, so we just add more to the cart
            this.cartItemStore[index].count += count;
        }
        this.saveToLocalStorage();
    };
    /**
     * This function set Item's count in the cart
     * and then broadcast the items to the subscribed functions
     *
     * @param bookId string
     * @param count number
     */
    CartService.prototype.setItemCount = function (bookId, count) {
        if (count === void 0) { count = 1; }
        // Add item to the cart or increase the count Of This Item
        var index = this.getItemIndex(bookId);
        if (index == -1) {
            return;
        }
        this.cartItemStore[index].count = count;
        this.saveToLocalStorage();
    };
    /**
     * This function asks cart Items from local Storage
     * and broadcast the found items to the subscribed functions
     */
    CartService.prototype.getItems = function () {
        // Read From local Storage
        if (typeof (Storage) !== "undefined") {
            this.cartItemStore = JSON.parse(localStorage.getItem(this.CART_KEY)) || [];
        }
        // Broadcast changes to subscribed functions
        this.cartItemSubject.next(this.cartItemStore);
    };
    /**
     * This function removes an item from the cart
     * @param bookId string
     */
    CartService.prototype.removeItem = function (bookId) {
        var index = this.getItemIndex(bookId);
        if (index >= 0) {
            this.cartItemStore.splice(index, 1);
            this.saveToLocalStorage();
        }
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CartService);

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map