import { Component, Input } from '@angular/core';
import { Memoryutil } from '../../../models/fullmodels';
@Component({
  selector: 'app-gridviewmemutil',
  templateUrl: './gridviewmemutil.component.html',
  styleUrl: './gridviewmemutil.component.css'
})
export class GridviewmemutilComponent {
  @Input() data: Memoryutil[] = [];
  parseInt(value: string): number {
    return parseInt(value);
  }
}
