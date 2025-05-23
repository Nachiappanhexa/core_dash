import { Component, Input, OnInit } from '@angular/core';
import { Pingreport } from '../../../models/fullmodels';
import { ApiServiceTS } from '../../../services/apicalls';

@Component({
  selector: 'app-mainviewping',
  templateUrl: './mainviewping.component.html',
  styleUrl: './mainviewping.component.css'
})
export class MainviewpingComponent  implements OnInit  {
 

  isGrid: boolean = true;
  IsSummarydata: boolean = true;
  
  onViewChange(isGrid: boolean) {
    this.isGrid = isGrid;
  }
  

  constructor() { }
ngOnInit(): void {
  
  }
}
