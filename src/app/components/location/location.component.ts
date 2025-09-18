import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="find-us-at-section" id="location">
      <div class="content">
        <h2>{{ sectionTitle() }}</h2>
        <div class="location-info">
          <img [src]="markerImage()" [alt]="markerAlt()" />
          <span>{{ address() }}</span>
        </div>
      </div>
      <iframe [src]="mapUrl" [title]="mapTitle()" loading="lazy"></iframe>
    </section>
  `,
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  sectionTitle = signal('FIND US AT');
  markerImage = signal('assets/images/map_marker.png');
  markerAlt = signal('Unseren Hauptstandort finden Sie in München');
  address = signal('Kapuzinerstraße 31, München 80337');
  mapTitle = signal('Google Maps Karte mit unserem Standort in München');

  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...'; // volle URL hier einfügen
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
