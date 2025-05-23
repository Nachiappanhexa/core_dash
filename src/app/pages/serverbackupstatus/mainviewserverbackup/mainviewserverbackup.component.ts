import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackupServer } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainviewserverbackup',
  templateUrl: './mainviewserverbackup.component.html',
  styleUrl: './mainviewserverbackup.component.css'
})
export class MainviewserverbackupComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  serverBackupData: BackupServer[] = [];
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
    this.Apicalls.getDataSortedByBackupserverStatus().subscribe(data => {
      this.serverBackupData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}

