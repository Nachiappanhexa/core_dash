import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Pingreport, Backoffice } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-mainviewserversvs',
  templateUrl: './mainviewserversvs.component.html',
  styleUrl: './mainviewserversvs.component.css'
})
export class MainviewserversvsComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  serviceData: Backoffice[] = [];
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
    this.Apicalls.getDataSortedByServerServiceStatus().subscribe(data => {
      this.serviceData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}

