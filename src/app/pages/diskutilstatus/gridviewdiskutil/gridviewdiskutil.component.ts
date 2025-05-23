import { Component, Input } from '@angular/core';
import { Diskutil } from '../../../models/fullmodels';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'app-gridviewdiskutil',
  templateUrl: './gridviewdiskutil.component.html',
  styleUrl: './gridviewdiskutil.component.css'
})
export class gridviewdiskutilComponent {
  @Input() data: Diskutil[] = [];
  constructor(private dialog: MatDialog) { }
  isAvailableOrRunning(dat: any): boolean {
    for (const key in dat) {
      if (Object.prototype.hasOwnProperty.call(dat, key)) {
        if (dat[key] === 'Not Available' || dat[key] === 'Not Running') {
          return false;
        }
      }
    }
    return true;
  }
  openDialog(item: any): void {
    const bookservice: boolean = false;
    const diskutil: boolean = true;
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '400px',
      data: {item, bookservice: bookservice, diskutil: diskutil}
    });
  }
}