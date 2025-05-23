import { Component } from '@angular/core';
import { ApiServiceTS } from '../../../../services/apicalls';
import { Pingreport, RAIDModel, dashboard } from '../../../../models/fullmodels';
import { interval } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gridviewbattery',
  templateUrl: './gridviewbattery.component.html',
  styleUrl: './gridviewbattery.component.css'
})
export class GridviewbatteryComponent {
 
  
  data: RAIDModel[] = [];
  constructor(private Apicalls: ApiServiceTS) { }

  ngOnInit() {
    this.LoadData();
    interval(1000).subscribe(() => {
      this.LoadData();
    });
  }
  LoadData() {
    this.Apicalls.getDataRaidBatteryStatus().subscribe(sortedData => {
      this.data = sortedData;
    });
  }
}