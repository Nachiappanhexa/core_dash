import { Component, Input } from '@angular/core';
import { TillsStatus } from '../../../models/fullmodels';

@Component({
  selector: 'app-gridviewtill',
  templateUrl: './gridviewtill.component.html',
  styleUrl: './gridviewtill.component.css'
})
export class GridviewtillComponent {
  @Input() data: TillsStatus[] = [];
}
