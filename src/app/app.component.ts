import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="header">
    <img [src]="logo">
  </header>
  <div class="wrapper">
    <app-tesla-battery></app-tesla-battery>
  </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tesla-range-calculator';
  logo: String = 'assets/logo.svg';
}
