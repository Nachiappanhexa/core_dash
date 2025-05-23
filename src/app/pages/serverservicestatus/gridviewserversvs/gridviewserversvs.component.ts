import { Component, Input } from '@angular/core';
import { DialogComponent } from '../../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Backoffice } from '../../../models/fullmodels';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gridviewserversvs',
  templateUrl: './gridviewserversvs.component.html',
  styleUrl: './gridviewserversvs.component.css'
})
export class GridviewserversvsComponent {
  @Input() data: Backoffice[] = [];

  constructor(private dialog: MatDialog) { }

  isAvailableOrRunning(dat: any): boolean {
    for (const key in dat) {
      if (Object.prototype.hasOwnProperty.call(dat, key)) {
        if (dat[key] === 'Not Available' || dat[key] === 'Not Running') {
          return false; // If any property has 'Not Available' or 'Not Running', return true
        }
      }
    }
    return true; // If none of the properties have 'Not Available' or 'Not Running', return false
  }

  openDialog(item: any): void {
    const bookservice: boolean = true;
    const diskutil: boolean = false;
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '400px',
      data: { item, bookservice: bookservice, diskutil: diskutil }
    });
  }
}