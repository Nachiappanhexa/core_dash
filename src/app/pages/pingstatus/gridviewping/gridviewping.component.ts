import { Component } from '@angular/core';
import { ApiServiceTS } from '../../../services/apicalls';
import { Pingreport, dashboard } from '../../../models/fullmodels';
import { interval } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-gridviewping',
  templateUrl: './gridviewping.component.html',
  styleUrl: './gridviewping.component.css'
})
export class GridviewpingComponent {
 
  
  data: Pingreport[] = [];
  constructor(private Apicalls: ApiServiceTS) { }

  ngOnInit() {
    this.LoadData();
    interval(1000).subscribe(() => {
      this.LoadData();
    });
  }
  LoadData() {
    this.Apicalls.getPingDataSortedByPingStatus().subscribe(sortedData => {
      this.data = sortedData;
    });
  }
}

