import { Component, signal } from '@angular/core';

interface OrderStep {
  id: string;
  image: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  template: `
    <section class="how-to-order-section">
      <div class="content">
        <h2>{{ sectionTitle() }}</h2>
        <div class="steps">
          @for (step of steps(); track step.id) {
          <div class="step">
            <img [src]="step.image" [alt]="step.alt" />
            <span [innerHTML]="step.title"></span>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./how-to-order.component.scss'],
})
export class HowToOrderComponent {
  sectionTitle = signal('HOW TO ORDER');

  steps = signal<OrderStep[]>([
    {
      id: 'noodle',
      image: 'assets/images/noodle.png',
      alt: 'Entscheide dich für deine Lieblingsnudel.',
      title: 'Pick your <br /> noodle',
    },
    {
      id: 'broth',
      image: 'assets/images/broth.png',
      alt: 'Wähle aus drei Sorten Brühe.',
      title: 'Pick your <br /> broth',
    },
    {
      id: 'toppings',
      image: 'assets/images/egg.png',
      alt: 'Zur Abrundung: Toppings.',
      title: 'Add your <br /> toppings',
    },
  ]);
}
