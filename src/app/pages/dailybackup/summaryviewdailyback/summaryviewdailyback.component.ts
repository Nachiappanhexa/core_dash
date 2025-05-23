import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DailyBackup } from '../../../models/fullmodels';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-summaryviewdailyback',
  templateUrl: './summaryviewdailyback.component.html',
  styleUrl: './summaryviewdailyback.component.css'
})
export class SummaryviewdailybackComponent implements OnChanges {
  @Input() data: DailyBackup[] = [];
  SummaryData: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.calculateSummary();
    }
  }

  calculateSummary() {
    this.SummaryData.Total = this.data.length;
    const excludedKeys = ["ServerName", "Location", "Serverstatus"];
    const keys = Object.keys(this.data[0]).filter(key => !excludedKeys.includes(key));
    this.SummaryData.Online = this.data.filter(item => item.BackupStatus === "Completed").length;
    this.SummaryData.Offline = this.data.filter(item => item.BackupStatus === "Failed" || item.BackupStatus === "Partial Success").length;
    this.SummaryData.running = this.data.filter(item => item.BackupStatus === "Backup Script Triggered" || item.BackupStatus === "Backup Running").length;
    this.SummaryData.encryptionCount = this.data.filter(item => item.EncryptionStatus === "Completed").length;
    this.SummaryData.serverOffline = this.data.filter(item => item.BackupStatus === "Server Unavailable").length;
    this.SummaryData.encryptionPercentage = Math.floor((this.SummaryData.encryptionCount / this.SummaryData.Total) * 100);
    this.SummaryData.Percentage = Math.floor((this.SummaryData.Online / this.SummaryData.Total) * 100);
  }
}
