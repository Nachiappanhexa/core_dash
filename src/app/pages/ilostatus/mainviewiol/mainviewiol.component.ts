import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILOreport } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainviewiol',
  templateUrl: './mainviewiol.component.html',
  styleUrl: './mainviewiol.component.css'
})
export class MainviewiolComponent implements OnInit, OnDestroy {
  isGrid: boolean = true;
  iloData: ILOreport[] = [];
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
    this.Apicalls.getILOData().subscribe(data => {
      this.iloData = data;
    });
  }

  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
}
