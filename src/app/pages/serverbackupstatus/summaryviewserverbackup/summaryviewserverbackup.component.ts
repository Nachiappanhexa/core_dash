import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BackupServer } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-summaryviewserverbackup',
  templateUrl: './summaryviewserverbackup.component.html',
  styleUrl: './summaryviewserverbackup.component.css'
})
export class SummaryviewserverbackupComponent implements OnChanges {
  @Input() data: BackupServer[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    this.SummaryData.Running = this.data.filter(item => item.BackupStatus === "Running").length;
    this.SummaryData.Completed = this.data.filter(item => item.BackupStatus === "completed").length;
    this.SummaryData.Failed = this.data.filter(item => item.BackupStatus === "Failed").length;
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Completed / this.SummaryData.Total) * 100);
  }
}
