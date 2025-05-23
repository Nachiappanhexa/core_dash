import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TableModule } from 'primeng/table';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WickesDashboardUpgrade';
  isSideNavCollapsed = false;
  screenWidth = 0;
  

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
