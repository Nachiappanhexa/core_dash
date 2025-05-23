import { Component, Input } from '@angular/core';
import { DailyBackup } from '../../../models/fullmodels';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'app-gridviewdailyback',
  templateUrl: './gridviewdailyback.component.html',
  styleUrl: './gridviewdailyback.component.css'
})
export class GridviewdailybackComponent {
  @Input() data: DailyBackup[] = [];
  constructor(private dialog: MatDialog) { }
  isAvailableOrRunning(dat: any): boolean {
    for (const key in dat) {
      if (Object.prototype.hasOwnProperty.call(dat, key)) {
        if (dat[key] === 'Not Available' || dat[key] === 'Not Running'|| dat[key] === 'NA'|| dat[key] === 'Server Unavailable') {
          return false;
        }
      }
    }
    return true;
  }
  isAvailableOrRunningSt(dat: any): number {
    for (const key in dat) {
      if (Object.prototype.hasOwnProperty.call(dat, key)) {
        if (dat[key] === 'Server Unavailable') {
          return 3;
        } else if (dat[key] === 'Partial Success' || dat[key] === 'Failed') {
          return 2;
        } else if (dat[key] === 'Backup Running'|| dat[key] === 'Backup Script Triggered') {
          return 1;
        } else if (dat[key] === 'Available' || dat[key] === 'Completed') {
          return 0;
        }
      }
    }
    return 0;
  }
  openDialog(item: any): void {
    const bookservice: boolean = false;
    const diskutil: boolean = false;
    const dailybackup: boolean = true;
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '500px',
      width: '470px',
      data: {item, bookservice: bookservice, diskutil: diskutil, dailybackup: dailybackup}
    });
  }
}
