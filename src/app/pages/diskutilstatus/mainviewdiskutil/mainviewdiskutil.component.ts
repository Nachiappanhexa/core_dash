import { Component, OnInit, OnDestroy } from '@angular/core';
import { Diskutil } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-mainviewdiskutil',
  templateUrl: './mainviewdiskutil.component.html',
  styleUrl: './mainviewdiskutil.component.css'
})
export class mainviewdiskutilComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  diskutilData: Diskutil[] = [];
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
    this.Apicalls.getdiskutilStatus().subscribe(data => {
      this.diskutilData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
