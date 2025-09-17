import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="content">
        <h1>{{ title() }}</h1>
        <span>{{ subtitle() }}</span>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  title = signal('SAKURA RAMEN');
  subtitle = signal('THE BEST RAMEN IN TOWN');
}
