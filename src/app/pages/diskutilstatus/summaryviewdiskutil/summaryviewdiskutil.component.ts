import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Diskutil } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-summaryviewdiskutil',
  templateUrl: './summaryviewdiskutil.component.html',
  styleUrl: './summaryviewdiskutil.component.css'
})
export class summaryviewdiskutilComponent implements OnChanges {
  @Input() data: Diskutil[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Offline = this.data.filter(item => (item.C_Utilization > 95 || (item.C_Utilization >= 90 && item.C_Utilization <= 95) || (item.F_Utilization >= 90 && item.F_Utilization <= 95) || item.ServerStatus == 'Not Available')).length;
    this.SummaryData.Online = this.SummaryData.Total - this.SummaryData.Offline;
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
  }
}
