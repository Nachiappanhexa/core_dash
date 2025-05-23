import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Memoryutil } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-summaryviewmemutil',
  templateUrl: './summaryviewmemutil.component.html',
  styleUrl: './summaryviewmemutil.component.css'
})
export class SummaryviewmemutilComponent implements OnChanges {
  @Input() data: Memoryutil[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Online = this.data.filter(item => typeof item.RAMUtil === 'number' && item.RAMUtil < 95).length;
    this.SummaryData.Offline = this.data.filter(item => (typeof item.RAMUtil === 'number' && item.RAMUtil > 94) || (typeof item.RAMUtil === 'string' && item.RAMUtil === 'NA')).length;
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
  }
}
