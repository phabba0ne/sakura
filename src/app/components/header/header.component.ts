import { Component, signal, computed } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="content">
        <div>
          <img src="assets/images/sakura_logo.png" alt="Sakura Ramen Logo" />
          <nav aria-label="Hauptnavigation">
            <ul>
              @for (item of navItems(); track item.label) {
              <li>
                <a [href]="item.href" [attr.aria-label]="item.ariaLabel">
                  <span>{{ item.label }}</span>
                </a>
              </li>
              }
            </ul>
            <a id="buttonlink" [href]="phoneLink()">
              <span>
                <img src="assets/images/phone.png" alt="Ruf uns an: " />
                {{ phoneDisplay() }}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems = signal<NavItem[]>([
    { label: 'MENU', href: '#menu', ariaLabel: 'Sieh in die Speisekarte' },
    {
      label: 'LOCATIONS',
      href: '#location',
      ariaLabel: 'Suche barrierefreie Standorte in deiner Nähe',
    },
    { label: 'ABOUT', href: '#footer', ariaLabel: 'Erfahre mehr über uns' },
  ]);

  phoneNumber = signal('+4917654564534');
  phoneDisplay = signal('0176 54564534');

  phoneLink = computed(() => `tel:${this.phoneNumber()}`);
}
