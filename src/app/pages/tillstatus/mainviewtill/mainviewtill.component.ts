import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Pingreport, TillsStatus } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-mainviewtill',
  templateUrl: './mainviewtill.component.html',
  styleUrl: './mainviewtill.component.css'
})
export class MainviewtillComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  tillData: TillsStatus[] = [];
  private refreshSub?: Subscription;

  constructor(private Apicalls: ApiServiceTS) { }

  ngOnInit() {
    this.loadData();
    this.refreshSub = interval(60000).subscribe(() => this.loadData()); // 1 min refresh
  }

  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }

  loadData() {
    this.Apicalls.getTillPingStatus().subscribe(data => {
      this.tillData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
