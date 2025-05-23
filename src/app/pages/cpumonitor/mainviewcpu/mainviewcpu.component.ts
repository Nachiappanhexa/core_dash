import { Component, OnInit, OnDestroy } from '@angular/core';
import { CPUMonitor } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainviewcpu',
  templateUrl: './mainviewcpu.component.html',
  styleUrl: './mainviewcpu.component.css'
})
export class MainviewcpuComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  cpuData: CPUMonitor[] = [];
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
    this.Apicalls.getDataSortedByCPUMonitor().subscribe(data => {
      this.cpuData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}

