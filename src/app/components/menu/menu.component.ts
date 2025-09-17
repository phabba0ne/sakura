import { Component, signal } from '@angular/core';

interface MenuOption {
  protein: string;
  price: string;
}

interface MenuItem {
  id: string;
  name: string;
  image: string;
  alt: string;
  options: MenuOption[];
  reverse?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <section class="menu-section" id="menu">
      <div class="content">
        <h2>{{ sectionTitle() }}</h2>
        @for (item of menuItems(); track item.id) {
        <div class="menu-item" [class.flip-flex-direction]="item.reverse">
          <img [src]="item.image" [alt]="item.alt" />
          <div class="menu-details">
            <table>
              <th>{{ item.name }}</th>
              @for (option of item.options; track option.protein) {
              <tr>
                <td>
                  <span>{{ option.protein }}</span>
                </td>
                <td>
                  <span>{{ option.price }}</span>
                </td>
              </tr>
              }
            </table>
          </div>
        </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  sectionTitle = signal('OUR MENU');

  menuItems = signal<MenuItem[]>([
    {
      id: 'tonkatsu',
      name: 'Tonkatsu Ramen',
      image: 'assets/images/R1.png',
      alt: 'Schüssel mit Tonkotsu Ramen, Chashu, Ei, Frühlingszwiebeln und Brühe',
      options: [
        { protein: 'CHICKEN', price: '11.95€' },
        { protein: 'BEEF', price: '12.95€' },
        { protein: 'SHRIMP', price: '13.95€' },
      ],
    },
    {
      id: 'spicy-miso',
      name: 'Spicy Miso Ramen',
      image: 'assets/images/R2.png',
      alt: 'Spicy Miso Ramen mit roter Brühe, vier Scheiben Schweinefleisch',
      options: [
        { protein: 'CHICKEN', price: '11.95€' },
        { protein: 'BEEF', price: '12.95€' },
        { protein: 'SHRIMP', price: '13.95€' },
      ],
      reverse: true,
    },
    {
      id: 'shio',
      name: 'Shio Ramen',
      image: 'assets/images/R3.png',
      alt: 'Shio Ramen mit klarer Brühe, Fleisch, Ei, Frühlingszwiebeln',
      options: [
        { protein: 'CHICKEN', price: '11.95€' },
        { protein: 'BEEF', price: '12.95€' },
        { protein: 'SHRIMP', price: '13.95€' },
      ],
    },
  ]);
}
