import { Component, Input } from '@angular/core';
import { data } from 'jquery';
import { Pingreport } from '../../../../models/fullmodels';
import { ApiServiceTS } from '../../../..//services/apicalls';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-summaryviewbattery',
  templateUrl: './summaryviewbattery.component.html',
  styleUrl: './summaryviewbattery.component.css'
})
export class SummaryviewbatteryComponent {
  Pingreports: any[] = [];
  SummaryData:any={};
  ngOnInit() {
    this.LoadData();
  }

  constructor(private Apicalls: ApiServiceTS) { }

  LoadData() {
    this.Apicalls.getDataRaidBatteryStatus().subscribe(data => {
    this.Pingreports = data;
    this.SummaryData.Total=this.Pingreports.length;
    this.SummaryData.Online = this.Pingreports.filter(item => item.BatteryStatus === 1).length;
    this.SummaryData.Offline = this.Pingreports.filter(item => item.BatteryStatus === 0).length;
    this.SummaryData.Percentage=Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
    });
  }
}
