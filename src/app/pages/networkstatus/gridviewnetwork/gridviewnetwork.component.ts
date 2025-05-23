import { Component, Input } from '@angular/core';
import { SwitchPing } from '../../../models/fullmodels';

@Component({
  selector: 'app-gridviewnetwork',
  templateUrl: './gridviewnetwork.component.html',
  styleUrl: './gridviewnetwork.component.css'
})
export class GridviewnetworkComponent {
  @Input() data: SwitchPing[] = [];
}
