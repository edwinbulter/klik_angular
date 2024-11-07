import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_klik_app';
  showHamburgerMenu = false;

  match(route: string) {
    const currentUrl = window.location.href;
    return currentUrl.endsWith(route.toLowerCase());
  }

  onClickHamburger() {
    this.showHamburgerMenu = !this.showHamburgerMenu;
  }
}
