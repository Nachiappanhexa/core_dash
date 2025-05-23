import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ILOreport } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-summaryviewiol',
  templateUrl: './summaryviewiol.component.html',
  styleUrl: './summaryviewiol.component.css'
})
export class SummaryviewiolComponent implements OnChanges {
  @Input() data: ILOreport[] = [];
  SummaryDatailo: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryDatailo.Total = this.data.length;
    this.SummaryDatailo.Online = this.data.filter(item => item.ilopingstatus === "1").length;
    this.SummaryDatailo.Offline = this.data.filter(item => item.ilopingstatus === "0").length;
    this.SummaryDatailo.Percentage = Math.floor((this.SummaryDatailo.Online / this.SummaryDatailo.Total) * 100);
  }
}
