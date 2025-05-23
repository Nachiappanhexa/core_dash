import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CPUMonitor } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-summaryviewcpu',
  templateUrl: './summaryviewcpu.component.html',
  styleUrl: './summaryviewcpu.component.css'
})
export class SummaryviewcpuComponent implements OnChanges {
  @Input() data: CPUMonitor[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Online = this.data.filter(item => item.currentCPUUsage < 95).length;
    this.SummaryData.Offline = this.data.filter(item => item.currentCPUUsage > 94).length + this.data.filter(item => item.serverstatus === '0').length;
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
  }
}