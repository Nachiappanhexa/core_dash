import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pingreport, SwitchPing } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainviewnetwork',
  templateUrl: './mainviewnetwork.component.html',
  styleUrl: './mainviewnetwork.component.css'
})
export class MainviewnetworkComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  networkData: SwitchPing[] = [];
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
    this.Apicalls.getDataSortedBynetworkSwitchStatus().subscribe(data => {
      this.networkData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
