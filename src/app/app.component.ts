import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowToOrderComponent } from './components/how-to-order/how-to-order.component';
import { MenuComponent } from './components/menu/menu.component';
import { LocationComponent } from './components/location/location.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Hier muss es stehen
  imports: [
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    HowToOrderComponent,
    MenuComponent,
    LocationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sakura Ramen';
}

// Angular 19 SCSS Implementation Notes
// File Structure
// Place each SCSS file in its respective component folder:
// src/app/
// ├── components/
// │   ├── header/
// │   │   ├── header.component.ts
// │   │   ├── header.component.html
// │   │   └── header.component.scss
// │   ├── hero/
// │   │   ├── hero.component.ts
// │   │   ├── hero.component.html
// │   │   └── hero.component.scss
// │   ├── how-to-order/
// │   │   ├── how-to-order.component.ts
// │   │   ├── how-to-order.component.html
// │   │   └── how-to-order.component.scss
// │   ├── menu/
// │   │   ├── menu.component.ts
// │   │   ├── menu.component.html
// │   │   └── menu.component.scss
// │   ├── location/
// │   │   ├── location.component.ts
// │   │   ├── location.component.html
// │   │   └── location.component.scss
// │   └── footer/
// │       ├── footer.component.ts
// │       ├── footer.component.html
// │       └── footer.component.scss
// └── styles.scss (global styles)
// Component Configuration
// Make sure each component has proper ViewEncapsulation:
// typescriptimport { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
//   encapsulation: ViewEncapsulation.None // If you need global styling
// })
// Key Changes Made
// 1. SCSS Nesting

// All styles are properly nested within the :host selector
// Media queries are nested within their parent selectors
// BEM-like class structure maintained

// 2. Media Query Breakpoints
// Updated to match your specified breakpoints:

// max-width: 1920px
// max-width: 1440px
// max-width: 768px
