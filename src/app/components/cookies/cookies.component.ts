import { Component } from '@angular/core';

@Component({
    selector: 'app-cookies',
    imports: [],
    templateUrl: './cookies.component.html',
    styleUrl: './cookies.component.scss'
})
export class CookiesComponent {
  accept = false;

  constructor() {
    this.accept = localStorage.getItem('fc-accept-cookies') === 'true';
  }

  acceptCookies() {
    localStorage.setItem('fc-accept-cookies', 'true');
    this.accept = true;
  }
}
