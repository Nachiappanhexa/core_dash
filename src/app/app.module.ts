import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CircleComponent } from './circle/circle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { ToggleButtonComponent } from './togglebutton/togglebutton.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductsComponent } from './products/products.component';
import { DataTablesModule } from "angular-datatables";
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table, TableModule } from 'primeng/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UkmapchartComponent } from './ukmapchart/ukmapchart.component';
import { MeterchartComponent } from './meterchart/meterchart.component';
import { SummaryviewpingComponent } from './Pages/pingstatus/summaryviewping/summaryviewping.component';
import { GridviewpingComponent } from './Pages/pingstatus/gridviewping/gridviewping.component';
import { TableviewpingComponent } from './Pages/pingstatus/tableviewping/tableviewping.component';
import { MainviewpingComponent } from './Pages/pingstatus/mainviewping/mainviewping.component';
import { SummaryviewbackofficeComponent } from './Pages/backofficestatus/summaryviewbackoffice/summaryviewbackoffice.component';
import { GridviewbackofficeComponent } from './Pages/backofficestatus/gridviewbackoffice/gridviewbackoffice.component';
import { TableviewbackofficeComponent } from './Pages/backofficestatus/tableviewbackoffice/tableviewbackoffice.component';
import { MainviewbackofficeComponent } from './Pages/backofficestatus/mainviewbackoffice/mainviewbackoffice.component';
import { SummaryviewiolComponent } from './Pages/ilostatus/summaryviewiol/summaryviewiol.component';
import { GridviewiolComponent } from './Pages/ilostatus/gridviewiol/gridviewiol.component';
import { TableviewiolComponent } from './Pages/ilostatus/tableviewiol/tableviewiol.component';
import { MainviewiolComponent } from './Pages/ilostatus/mainviewiol/mainviewiol.component';
import { SummaryviewmemutilComponent } from './Pages/memoryutilstatus/summaryviewmemutil/summaryviewmemutil.component';
import { GridviewmemutilComponent } from './Pages/memoryutilstatus/gridviewmemutil/gridviewmemutil.component';
import { TableviewmemutilComponent } from './Pages/memoryutilstatus/tableviewmemutil/tableviewmemutil.component';
import { MainviewmemutilComponent } from './Pages/memoryutilstatus/mainviewmemutil/mainviewmemutil.component';
import { SummaryviewnetworkComponent } from './Pages/networkstatus/summaryviewnetwork/summaryviewnetwork.component';
import { GridviewnetworkComponent } from './Pages/networkstatus/gridviewnetwork/gridviewnetwork.component';
import { TableviewnetworkComponent } from './Pages/networkstatus/tableviewnetwork/tableviewnetwork.component';
import { MainviewnetworkComponent } from './Pages/networkstatus/mainviewnetwork/mainviewnetwork.component';
import { SummaryviewserverbackupComponent } from './Pages/serverbackupstatus/summaryviewserverbackup/summaryviewserverbackup.component';
import { GridviewserverbackupComponent } from './Pages/serverbackupstatus/gridviewserverbackup/gridviewserverbackup.component';
import { TableviewserverbackupComponent } from './Pages/serverbackupstatus/tableviewserverbackup/tableviewserverbackup.component';
import { MainviewserverbackupComponent } from './Pages/serverbackupstatus/mainviewserverbackup/mainviewserverbackup.component';
import { SummaryviewserversvsComponent } from './Pages/serverservicestatus/summaryviewserversvs/summaryviewserversvs.component';
import { GridviewserversvsComponent } from './Pages/serverservicestatus/gridviewserversvs/gridviewserversvs.component';
import { TableviewserversvsComponent } from './Pages/serverservicestatus/tableviewserversvs/tableviewserversvs.component';
import { MainviewserversvsComponent } from './Pages/serverservicestatus/mainviewserversvs/mainviewserversvs.component';
import { SummaryviewtillComponent } from './Pages/tillstatus/summaryviewtill/summaryviewtill.component';
import { GridviewtillComponent } from './Pages/tillstatus/gridviewtill/gridviewtill.component';
import { TableviewtillComponent } from './Pages/tillstatus/tableviewtill/tableviewtill.component';
import { MainviewtillComponent } from './Pages/tillstatus/mainviewtill/mainviewtill.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SummaryviewcpuComponent } from './Pages/cpumonitor/summaryviewcpu/summaryviewcpu.component';
import { GridviewcpuComponent } from './Pages/cpumonitor/gridviewcpu/gridviewcpu.component';
import { TableviewcpuComponent } from './Pages/cpumonitor/tableviewcpu/tableviewcpu.component';
import { MainviewcpuComponent } from './Pages/cpumonitor/mainviewcpu/mainviewcpu.component';
import { MapviewComponent } from './mapview/mapview.component';
import { SummaryviewbatteryComponent } from './Pages/raid/battery/summaryviewbattery/summaryviewbattery.component';
import { GridviewbatteryComponent } from './Pages/raid/battery/gridviewbattery/gridviewbattery.component';
import { TableviewbatteryComponent } from './Pages/raid/battery/tableviewbattery/tableviewbattery.component';
import { MainviewbatteryComponent } from './Pages/raid/battery/mainviewbattery/mainviewbattery.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { SummaryviewdiskComponent } from './Pages/raid/disk/summaryviewdisk/summaryviewdisk.component';
import { GridviewdiskComponent } from './Pages/raid/disk/gridviewdisk/gridviewdisk.component';
import { TableviewdiskComponent } from './Pages/raid/disk/tableviewdisk/tableviewdisk.component';
import { MainviewdiskComponent } from './Pages/raid/disk/mainviewdisk/mainviewdisk.component';
import { summaryviewdiskutilComponent } from './pages/diskutilstatus/summaryviewdiskutil/summaryviewdiskutil.component';
import { gridviewdiskutilComponent } from './pages/diskutilstatus/gridviewdiskutil/gridviewdiskutil.component';
import { tableviewdiskutilComponent } from './pages/diskutilstatus/tableviewdiskutil/tableviewdiskutil.component';
import { mainviewdiskutilComponent } from './pages/diskutilstatus/mainviewdiskutil/mainviewdiskutil.component';
import { SummaryviewdailybackComponent } from './pages/dailybackup/summaryviewdailyback/summaryviewdailyback.component';
import { GridviewdailybackComponent } from './pages/dailybackup/gridviewdailyback/gridviewdailyback.component';
import { TableviewdailybackComponent } from './pages/dailybackup/tableviewdailyback/tableviewdailyback.component';
import { MainviewdailybackComponent } from './pages/dailybackup/mainviewdailyback/mainviewdailyback.component';
import {MainviewupsComponent} from './pages/upsstatus/mainviewups/mainviewups.component'
import { SummaryviewupsComponent } from './pages/upsstatus/summaryviewups/summaryviewups.component';
import { GridviewupsComponent } from './pages/upsstatus/gridviewups/gridviewups.component';
import { TableviewupsComponent } from './pages/upsstatus/tableviewups/tableviewups.component';
import { Gradientpiechart } from './gradient-pie-chart/gradient-pie-chart.component';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CircleComponent,
    DashboardComponent,
    PagesComponent,
    SidenavComponent,
    MediaComponent,
    SettingsComponent,
    StatisticsComponent,
    SublevelMenuComponent,
    ToggleButtonComponent,
    UkmapchartComponent,
    MeterchartComponent,
    SummaryviewpingComponent,
    GridviewpingComponent,
    TableviewpingComponent,
    MainviewpingComponent,
    SummaryviewbackofficeComponent,
    GridviewbackofficeComponent,
    TableviewbackofficeComponent,
    MainviewbackofficeComponent,
    SummaryviewiolComponent,
    GridviewiolComponent,
    TableviewiolComponent,
    MainviewiolComponent,
    SummaryviewmemutilComponent,
    GridviewmemutilComponent,
    TableviewmemutilComponent,
    MainviewmemutilComponent,
    SummaryviewnetworkComponent,
    GridviewnetworkComponent,
    TableviewnetworkComponent,
    MainviewnetworkComponent,
    SummaryviewserverbackupComponent,
    GridviewserverbackupComponent,
    TableviewserverbackupComponent,
    MainviewserverbackupComponent,
    SummaryviewserversvsComponent,
    GridviewserversvsComponent,
    TableviewserversvsComponent,
    MainviewserversvsComponent,
    SummaryviewtillComponent,
    GridviewtillComponent,
    TableviewtillComponent,
    MainviewtillComponent,
    DialogComponent,
    SummaryviewcpuComponent,
    GridviewcpuComponent,
    TableviewcpuComponent,
    MainviewcpuComponent,
    MapviewComponent,
    SummaryviewdiskComponent,
    GridviewdiskComponent,
    TableviewdiskComponent,
    MainviewdiskComponent,
    SummaryviewbatteryComponent,
    GridviewbatteryComponent,
    TableviewbatteryComponent,
    MainviewbatteryComponent,
    summaryviewdiskutilComponent,
    gridviewdiskutilComponent,
    tableviewdiskutilComponent,
    mainviewdiskutilComponent,
    SummaryviewdailybackComponent,
    GridviewdailybackComponent,
    TableviewdailybackComponent,
    MainviewdailybackComponent,
    MainviewupsComponent,
    TableviewupsComponent,
    SummaryviewupsComponent,
    GridviewupsComponent,
    Gradientpiechart
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    DataTablesModule,
    MatIcon,
    MatGridListModule,
     NgCircleProgressModule.forRoot({
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -18,
      "outerStrokeLinecap":"square",
      "radius": 60,
      "toFixed": 2,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF6347",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1,
      "startFromZero": false}),
      MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
