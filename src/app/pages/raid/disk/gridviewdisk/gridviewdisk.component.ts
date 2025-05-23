import { Component, Input } from '@angular/core';
import { RAIDModel } from '../../../../models/fullmodels';

@Component({
  selector: 'app-gridviewdisk',
  templateUrl: './gridviewdisk.component.html',
  styleUrl: './gridviewdisk.component.css'
})
export class GridviewdiskComponent {
  @Input() data: RAIDModel[] = [];
}