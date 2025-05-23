import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() bookservice: boolean;
  @Input() diskutil: boolean;
  @Input() dailybackup: boolean;
  @Input() upsdetails: boolean;
 
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
        if (dat[key] === 'Not Available' || dat[key] === 'Partial Success' || dat[key] === 'Not Running'|| dat[key] === 'Failed'|| dat[key] === 'NA') {
          return false; // If any property has 'Not Available' or 'Not Running', return true
        }
      }
    }
    return true; // If none of the properties have 'Not Available' or 'Not Running', return false
  }
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookservice=data.bookservice;
    this.diskutil=data.diskutil;
    this.dailybackup=data.dailybackup;
    this.upsdetails=data.upsdetails;
    this.data=data.item;
   }

  onCloseDialog(): void {
    this.dialogRef.close();
  }
  
}
