import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TillsStatus } from '../../../models/fullmodels';

@Component({
  selector: 'app-summaryviewtill',
  templateUrl: './summaryviewtill.component.html',
  styleUrl: './summaryviewtill.component.css'
})
export class SummaryviewtillComponent implements OnChanges {
  @Input() data: TillsStatus[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Online = this.data.filter(item => item.pingstatus === "Online").length;
    this.SummaryData.Offline = this.data.filter(item => item.pingstatus === "Offline").length;
    this.SummaryData.Percentage = this.SummaryData.Total > 0 ? Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100) : 0;
  }
}
