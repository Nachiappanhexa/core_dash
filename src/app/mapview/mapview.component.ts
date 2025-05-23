import { Component } from '@angular/core';
import { LocationModel } from '../models/fullmodels';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrl: './mapview.component.css'
})
export class MapviewComponent {
locationData: LocationModel[] = [];
offlineLocationPingData!: any[]; // Array to store only offline entries

offlineCount=0;

receiveLocationData(data: LocationModel[]): void {
    this.locationData = data;
    this.calculateOfflineCount();
  }

  calculateOfflineCount(): void {
    this.offlineLocationPingData = this.locationData.filter(location => location.pingstatus === '0');

    this.offlineCount = this.offlineLocationPingData.length;
  }

}
