import { Component, Input } from '@angular/core';
import { ILOreport } from '../../../models/fullmodels';

@Component({
  selector: 'app-gridviewiol',
  templateUrl: './gridviewiol.component.html',
  styleUrl: './gridviewiol.component.css'
})
export class GridviewiolComponent {
  @Input() data: ILOreport[] = [];
}
