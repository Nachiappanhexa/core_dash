import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RAIDModel } from '../../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-summaryviewdisk',
  templateUrl: './summaryviewdisk.component.html',
  styleUrl: './summaryviewdisk.component.css'
})
export class SummaryviewdiskComponent implements OnChanges {
  @Input() data: RAIDModel[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Online = this.data.filter(item => item.DiskStatus === 1).length;
    this.SummaryData.Offline = this.data.filter(item => item.DiskStatus === 0).length;
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
  }
}
