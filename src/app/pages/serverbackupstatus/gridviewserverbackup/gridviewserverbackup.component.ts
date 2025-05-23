import { Component, Input } from '@angular/core';
import { BackupServer } from '../../../models/fullmodels';

@Component({
  selector: 'app-gridviewserverbackup',
  templateUrl: './gridviewserverbackup.component.html',
  styleUrl: './gridviewserverbackup.component.css'
})
export class GridviewserverbackupComponent {
  @Input() data: BackupServer[] = [];
}
