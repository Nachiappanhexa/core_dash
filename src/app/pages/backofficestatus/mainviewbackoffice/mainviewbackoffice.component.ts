import { Component, OnInit, Input } from '@angular/core';
import { Backoffice, Pingreport } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainviewbackoffice',
  templateUrl: './mainviewbackoffice.component.html',
  styleUrl: './mainviewbackoffice.component.css'
})
export class MainviewbackofficeComponent implements OnInit {
  isGrid: boolean = true;
  backofficeData: Backoffice[] = [];
  private refreshSub?: Subscription;

  constructor(private Apicalls: ApiServiceTS) { }

  ngOnInit() {
    this.loadData();
    this.refreshSub = interval(1000 * 60).subscribe(() => this.loadData()); // 1 min refresh
  }

  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }

  loadData() {
    this.Apicalls.getDataSortedByBackofficeStatus().subscribe(data => {
      this.backofficeData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
