import { Component, Input } from '@angular/core';
import { Pingreport } from '../../../../models/fullmodels';
import { ApiServiceTS } from '../../../../services/apicalls';

@Component({
  selector: 'app-mainviewbattery',
  templateUrl: './mainviewbattery.component.html',
  styleUrl: './mainviewbattery.component.css'
})
export class MainviewbatteryComponent {
 

  isGrid: boolean = true;
  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
  

  constructor(private Apicalls: ApiServiceTS) { }

}
