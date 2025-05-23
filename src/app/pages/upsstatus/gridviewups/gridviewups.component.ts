import { Component, Input } from '@angular/core';
import { DialogComponent } from '../../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ups } from '../../../models/fullmodels';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gridviewups',
  templateUrl: './gridviewups.component.html',
  styleUrl: './gridviewups.component.css'
})
export class GridviewupsComponent {
  @Input() data: ups[] = [];

  constructor(private dialog: MatDialog) { }

  getTimeInMinutes(runtime: string): number {
    const parts = runtime.split(' ');
    let hours = 0;
    let minutes = 0;

    if (parts[1]) {
      hours = parseInt(parts[1]);
    }
    if (parts[3]) {
      minutes = parseInt(parts[3]);
    }

    return hours * 60 + minutes;
  }

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
    const bookservice: boolean = false;
    const upsdetails: boolean = true;
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '415px',
      width: '250px',
      data: { item, bookservice: bookservice, upsdetails: upsdetails }
    });
  }
}