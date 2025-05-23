import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Pingreport, ups } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-mainviewups',
  templateUrl: './mainviewups.component.html',
  styleUrl: './mainviewups.component.css'
})
export class MainviewupsComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  upsData: ups[] = [];
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
    this.Apicalls.getUpsStatus().subscribe(data => {
      this.upsData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
