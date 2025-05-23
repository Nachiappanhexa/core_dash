import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UkmapchartComponent } from './ukmapchart/ukmapchart.component';
import { MeterchartComponent } from './meterchart/meterchart.component';
import { MainviewpingComponent } from './Pages/pingstatus/mainviewping/mainviewping.component';
import { MainviewbackofficeComponent } from './Pages/backofficestatus/mainviewbackoffice/mainviewbackoffice.component';
import { MainviewmemutilComponent } from './Pages/memoryutilstatus/mainviewmemutil/mainviewmemutil.component';
import { MainviewnetworkComponent } from './Pages/networkstatus/mainviewnetwork/mainviewnetwork.component';
import { MainviewserverbackupComponent } from './Pages/serverbackupstatus/mainviewserverbackup/mainviewserverbackup.component';
import { MainviewserversvsComponent } from './Pages/serverservicestatus/mainviewserversvs/mainviewserversvs.component';
import { MainviewtillComponent } from './Pages/tillstatus/mainviewtill/mainviewtill.component';
import { MainviewiolComponent } from './Pages/ilostatus/mainviewiol/mainviewiol.component';
import { MainviewcpuComponent } from './Pages/cpumonitor/mainviewcpu/mainviewcpu.component';
import { MapviewComponent } from './mapview/mapview.component';
import { MainviewbatteryComponent } from './Pages/raid/battery/mainviewbattery/mainviewbattery.component';
import { MainviewdiskComponent } from './Pages/raid/disk/mainviewdisk/mainviewdisk.component';
import { mainviewdiskutilComponent } from './pages/diskutilstatus/mainviewdiskutil/mainviewdiskutil.component';
import { MainviewdailybackComponent } from './pages/dailybackup/mainviewdailyback/mainviewdailyback.component';
import { MainviewupsComponent } from './pages/upsstatus/mainviewups/mainviewups.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent }, 
  
  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  // },
  {path: 'Map', component: MapviewComponent},
  // {
  //   path: 'coupens',
  //   loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  // },
  {path: 'CPUMeter', component: MeterchartComponent},
  {path: 'ping', component: MainviewpingComponent},
  {path: 'backoffice', component: MainviewbackofficeComponent},
  {path: 'dailybackup', component: MainviewdailybackComponent},
  {path: 'memoryutil', component: MainviewmemutilComponent},
  {path: 'cpu', component: MainviewcpuComponent},
  {path: 'network', component: MainviewnetworkComponent},
  {path: 'serverbackup', component: MainviewserverbackupComponent},
  {path: 'serverservice', component: MainviewserversvsComponent},
  {path: 'serverdisk', component: mainviewdiskutilComponent},
  {path: 'tills', component: MainviewtillComponent},
  {path: 'ilo', component: MainviewiolComponent},
  {path: 'battery', component: MainviewbatteryComponent},
  {path: 'disk', component: MainviewdiskComponent},
  {path: 'ups', component: MainviewupsComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
