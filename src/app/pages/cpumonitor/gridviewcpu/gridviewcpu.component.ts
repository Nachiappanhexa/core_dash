import { Component, Input } from '@angular/core';
import { CPUMonitor } from '../../../models/fullmodels';

@Component({
  selector: 'app-gridviewcpu',
  templateUrl: './gridviewcpu.component.html',
  styleUrl: './gridviewcpu.component.css'
})
export class GridviewcpuComponent {
  @Input() data: CPUMonitor[] = [];
}
