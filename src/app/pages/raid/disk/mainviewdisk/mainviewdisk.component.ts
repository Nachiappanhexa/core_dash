import { Component, OnInit, OnDestroy } from '@angular/core';
import { RAIDModel } from '../../../../models/fullmodels';
import { ApiServiceTS } from '../../../../services/apicalls';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-mainviewdisk',
  templateUrl: './mainviewdisk.component.html',
  styleUrl: './mainviewdisk.component.css'
})
export class MainviewdiskComponent implements OnInit, OnDestroy {

  isGrid: boolean = true;
  raidDiskData: RAIDModel[] = [];
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
    this.Apicalls.getDataRaidDiskStatus().subscribe(data => {
      this.raidDiskData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
