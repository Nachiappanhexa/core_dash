import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SwitchPing } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-summaryviewnetwork',
  templateUrl: './summaryviewnetwork.component.html',
  styleUrl: './summaryviewnetwork.component.css'
})
export class SummaryviewnetworkComponent implements OnChanges {
  @Input() data: SwitchPing[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Online = this.data.filter(item => item.switchpingstatus === "1").length;
    this.SummaryData.Offline = this.data.filter(item => item.switchpingstatus === "0").length;
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
  }
}
