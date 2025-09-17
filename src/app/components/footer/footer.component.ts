import { Component, signal } from '@angular/core';

interface SocialLink {
  id: string;
  url: string;
  image: string;
  alt: string;
}

interface LogoData {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="footer">
      <div class="content">
        <div class="logo-section">
          <img
            id="logo-mit-text"
            [src]="logoWithText().image"
            [alt]="logoWithText().alt"
          />
          <img id="logo" [src]="logo().image" [alt]="logo().alt" />
        </div>
        <div class="social-links">
          @for (link of socialLinks(); track link.id) {
          <a [href]="link.url" target="_blank" rel="noopener noreferrer">
            <img class="share-link-pic" [src]="link.image" [alt]="link.alt" />
          </a>
          }
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  logoWithText = signal<LogoData>({
    image: 'assets/images/sakura_ramen_logo_and_text.png',
    alt: 'Logo des Restaurants Sakura Ramen: Lotus',
  });

  logo = signal<LogoData>({
    image: 'assets/images/sakura_logo.png',
    alt: 'Logo des Restaurants Sakura Ramen: Lotus',
  });

  socialLinks = signal<SocialLink[]>([
    {
      id: 'tripadvisor',
      url: 'https://www.tripadvisor.com/',
      image: 'assets/images/tripadvisor_logo.png',
      alt: 'Tripadvisor',
    },
    {
      id: 'facebook',
      url: 'https://www.facebook.com/',
      image: 'assets/images/facebook_logo.png',
      alt: 'Facebook',
    },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/',
      image: 'assets/images/instagram_logo.png',
      alt: 'Instagram',
    },
  ]);
}
