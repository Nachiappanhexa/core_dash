import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.css']
})
export class ToggleButtonComponent {
  @Output() viewChange = new EventEmitter<boolean>();
  
  isGrid: boolean = true;

  ngOnInit(): void {
    // Call the method to set the default button
  }

  toggleView() {
    this.isGrid = !this.isGrid;
    this.viewChange.emit(this.isGrid);
  }
}
