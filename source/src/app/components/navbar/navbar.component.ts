import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <md-toolbar color="primary">
    <button mdButton routerLink="/home">Home</button>
    <button mdButton routerLink="/cart">Cart</button>
  </md-toolbar>
  `
})
export class NavbarComponent {
    /**
     * Toolbar of the web page
     */
}
