import { Component, OnInit, OnDestroy } from '@angular/core';
import { DailyBackup } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainviewdailyback',
  templateUrl: './mainviewdailyback.component.html',
  styleUrl: './mainviewdailyback.component.css'
})
export class MainviewdailybackComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  dailyBackupData: DailyBackup[] = [];
  private refreshSub?: Subscription;

  constructor(private Apicalls: ApiServiceTS) { }

  ngOnInit() {
    this.loadData();
    this.refreshSub = interval(1000 * 60).subscribe(() => this.loadData());
  }

  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }

  loadData() {
    this.Apicalls.getDataSortedBydailybackup().subscribe(data => {
      this.dailyBackupData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
