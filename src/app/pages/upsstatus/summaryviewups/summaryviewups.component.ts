import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ups } from '../../../models/fullmodels';

@Component({
  selector: 'app-summaryviewups',
  templateUrl: './summaryviewups.component.html',
  styleUrl: './summaryviewups.component.css'
})
export class SummaryviewupsComponent implements OnChanges {
  @Input() data: ups[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Offline = this.data.filter(item => (item.UPS_Ping == 0)).length;
    this.SummaryData.Online = this.SummaryData.Total - this.SummaryData.Offline;
    this.SummaryData.Percentage = this.SummaryData.Total > 0 ? Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100) : 0;
  }
}
