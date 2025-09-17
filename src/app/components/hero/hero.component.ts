import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  title = signal('SAKURA RAMEN');
  subtitle = signal('THE BEST RAMEN IN TOWN');

  backgroundImage = signal('assets/images/hero_bg.jpg');
  logo = signal('assets/images/sakura_ramen_logo_and_text.png');
}
