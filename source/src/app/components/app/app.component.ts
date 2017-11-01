import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <div>
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  /**
   * Default Component the important part is in the template
   */
}
