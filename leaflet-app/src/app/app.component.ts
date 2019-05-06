import {Component, OnInit} from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import {LocationTypesService} from "./services/location-types.service";
declare let L;

const STYLES = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocationTypesService]
})
export class AppComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);

  title = 'leaflet-app';
  coordinates;

  constructor(
    private theme: LyTheme2,
    private locationTypesService: LocationTypesService
  ) {
  }

  ngOnInit(): void {
    const map = L.map('map').setView([50.06, 19.93], 8);
    const markersLayer = L.layerGroup().addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    setTimeout(() => map.invalidateSize(true), 100);
    this.locationTypesService.getCoordinates().subscribe(coordinates => {
      this.coordinates = coordinates;
    });
    this.coordinates ? L.marker(this.coordinates).addTo(markersLayer) : [90,90];
    map.on('click', () => {
      markersLayer.clearLayers();
      for (let item in this.locationTypesService.properList) {
        L.marker(this.locationTypesService.properList[item].coordinates).addTo(markersLayer)
          .bindPopup(this.locationTypesService.properList[item].name);
      }
    },)
  }
}
