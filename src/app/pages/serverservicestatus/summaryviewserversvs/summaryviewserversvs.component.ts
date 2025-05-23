import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Backoffice } from '../../../models/fullmodels';

@Component({
  selector: 'app-summaryviewserversvs',
  templateUrl: './summaryviewserversvs.component.html',
  styleUrl: './summaryviewserversvs.component.css'
})
export class SummaryviewserversvsComponent implements OnChanges {
  @Input() data: Backoffice[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    let totalCountonline = 0;
    let totalCountoffline = 0;
    if (this.data.length > 0) {
      this.data.forEach(item => {
        const countWithinonlineItem = Object.values(item).filter(value => value === "Running").length;
        const countWithinofflineItem = Object.values(item).filter(value => value === "Failed" || value === "Not Running").length;
        totalCountonline += countWithinonlineItem;
        totalCountoffline += countWithinofflineItem;
      });
      const excludedKeys = ["ServerName", "Location", "Serverstatus"];
      const keys = Object.keys(this.data[0]).filter(key => !excludedKeys.includes(key));
      this.SummaryData.Online = totalCountonline;
      this.SummaryData.NoofService = keys.length;
      this.SummaryData.Offline = totalCountoffline;
      this.SummaryData.Percentage = (this.SummaryData.Total * this.SummaryData.NoofService) > 0 ? Math.floor((this.SummaryData.Online / (this.SummaryData.Total * this.SummaryData.NoofService)) * 100) : 0;
    } else {
      this.SummaryData.Online = 0;
      this.SummaryData.NoofService = 0;
      this.SummaryData.Offline = 0;
      this.SummaryData.Percentage = 0;
    }
  }
}
