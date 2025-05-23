import { Component, Input } from '@angular/core';
import { data } from 'jquery';
import { Pingreport } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../..//services/apicalls';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { interval } from 'rxjs';

@Component({
  selector: 'app-summaryviewping',
  templateUrl: './summaryviewping.component.html',
  styleUrl: './summaryviewping.component.css'
})
export class SummaryviewpingComponent {
  Pingreports: any[] = [];
  SummaryData:any={};
  ngOnInit() {
     this.LoadData();
        interval(1000).subscribe(() => {
          this.LoadData();
        });
  }

  constructor(private Apicalls: ApiServiceTS) { }

  LoadData() {
    this.Apicalls.getPingData().subscribe(data => {
    this.Pingreports = data;
    this.SummaryData.Total=this.Pingreports.length;
    this.SummaryData.Online = this.Pingreports.filter(item => item.pingstatus === "1").length;
    this.SummaryData.Offline = this.Pingreports.filter(item => item.pingstatus === "0").length;
    this.SummaryData.Percentage=Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
    });

  }
}
