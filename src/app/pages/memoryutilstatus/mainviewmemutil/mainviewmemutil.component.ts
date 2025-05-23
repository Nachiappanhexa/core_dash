import { Component, OnInit, OnDestroy } from '@angular/core';
import { Memoryutil } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-mainviewmemutil',
  templateUrl: './mainviewmemutil.component.html',
  styleUrl: './mainviewmemutil.component.css'
})
export class MainviewmemutilComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  memutilData: Memoryutil[] = [];
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
    this.Apicalls.getDataSortedByMemoryUtil().subscribe(data => {
      this.memutilData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
