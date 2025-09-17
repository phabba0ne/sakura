import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  template: `
    <section class="find-us-at-section" id="location">
      <div class="content">
        <h2>{{ sectionTitle() }}</h2>
        <div class="location-info">
          <img [src]="markerImage()" [alt]="markerAlt()" />
          <span>{{ address() }}</span>
        </div>
      </div>
      <iframe [src]="mapUrl()" [title]="mapTitle()" loading="lazy"> </iframe>
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
  mapUrl = signal(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2109956986274!2d11.558694776809554!3d48.125454252004666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf44cf7e4d5f%3A0x55a7bd29a73e9161!2sKapuzinerstra%C3%9Fe%2031%2C%2080337%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1749189400655!5m2!1sen!2sde'
  );
}
