import { Component, Input } from '@angular/core';
import { Backoffice } from '../../../models/fullmodels';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'app-gridviewbackoffice',
  templateUrl: './gridviewbackoffice.component.html',
  styleUrl: './gridviewbackoffice.component.css'
})
export class GridviewbackofficeComponent {
  @Input() data: Backoffice[] = [];
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
    const bookservice: boolean = true;
    const diskutil: boolean = false;
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '400px',
      data: {item, bookservice: bookservice, diskutil: diskutil}
    });
  }
}