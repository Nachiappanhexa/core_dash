import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, defer, interval, map, switchMap } from 'rxjs';
import { Backoffice, BackupServer, CPUMeterModel, CPUMonitor, DailyBackup, Diskutil, ups, FullmodelsTs, ILOreport, LocationModel, Memoryutil, Pingreport, RAIDModel, SwitchPing, TillsStatus, dashboard } from '../models/fullmodels';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceTS {
private apiUrl = 'http://172.18.157.139:81/serverpingreports/pingstatus/lastupdated';
private headers = new HttpHeaders({
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  });
  constructor(private client:HttpClient) { }

  getDatabyfilename(jsonfilename: string): Observable<dashboard[]> {
    return interval(10000).pipe(
       switchMap(() => this.client.get<dashboard[]>('../../assets/data/'+jsonfilename+'.json'))
     );
   }

   getserverpingbyLocation1(): Observable<LocationModel[]> {
    return this.client.get<LocationModel[]>('../../assets/data/Locationping.json');
  } 

  getserverpingbyLocation(): Observable<LocationModel[]> {
    const firstRequest = defer(() => this.client.get<LocationModel[]>('../../assets/data/Locationping.json'));
    const periodicRequests = interval(20000).pipe(
      switchMap(() => this.client.get<LocationModel[]>('../../assets/data/Locationping.json'))
    );
    return concat(firstRequest, periodicRequests);
  } 

  getCPUMeter(): Observable<CPUMeterModel[]> {
    const firstRequest = defer(() => this.client.get<CPUMeterModel[]>('../../assets/data/storeservercpureport.json'));
    const periodicRequests = interval(1000).pipe(
      switchMap(() => this.client.get<CPUMeterModel[]>('../../assets/data/storeservercpureport.json'))
    );
    return concat(firstRequest, periodicRequests);
  } 
  getData1(): Observable<dashboard[]> {
   return interval(1000).pipe(
      switchMap(() => this.client.get<dashboard[]>('../../assets/data/Dashboard.json'))
    );
  }

  getData(): Observable<dashboard[]> {
    return this.client.get<dashboard[]>('../../assets/data/Dashboard.json');
  }

    getPingData_API(): Observable<Pingreport[]> {
    
    const firstRequest = defer(() => this.client.get<Pingreport[]>(this.apiUrl));
    const periodicRequests = interval(10000).pipe(
      switchMap(() => this.client.get<Pingreport[]>(this.apiUrl))
    );
  
    return concat(firstRequest, periodicRequests);

  }
  getPingData(): Observable<Pingreport[]> {
    const firstRequest = defer(() => this.client.get<Pingreport[]>('../../assets/data/serverpingreport.json'));
    const periodicRequests = interval(10000).pipe(
      switchMap(() => this.client.get<Pingreport[]>('../../assets/data/serverpingreport.json'))
    );
  
    return concat(firstRequest, periodicRequests);

  }

  getILOData1(): Observable<ILOreport[]> {
    const firstRequestilo = defer(() => this.client.get<ILOreport[]>('../../assets/data/serverilopingreport.json'));
    const periodicRequestsilo = interval(20000).pipe(
      switchMap(() => this.client.get<ILOreport[]>('../../assets/data/serverilopingreport.json'))
    );
  
    return concat(firstRequestilo, periodicRequestsilo);

  }
  getILOData(): Observable<ILOreport[]> {
    return this.client.get<ILOreport[]>('../../assets/data/serverilopingreport.json');
  }


  getPingData1(): Observable<Pingreport[]> {
    return this.client.get<Pingreport[]>('../../assets/data/serverpingreport.json');
  }
 getPingDataSortedByPingStatus_API(): Observable<Pingreport[]> {
    return this.client.get<Pingreport[]>(this.apiUrl).pipe(
      map((data: Pingreport[]) => {
        // Sorting the data based on the pingstatus property, with "offline" values coming first
        return data.sort((a, b) => {
          if (a.pingstatus === '0' && b.pingstatus !== '0') {
            return -1;
          } else if (a.pingstatus !== '0' && b.pingstatus === '0') {
            return 1;
          } else {
            return 0;
          }
        });
      })
    );
  }
  getPingDataSortedByPingStatus(): Observable<Pingreport[]> {
    return this.client.get<Pingreport[]>('../../assets/data/serverpingreport.json')
      .pipe(
        map((data: Pingreport[]) => {
          // Sorting the data based on the pingstatus property, with "offline" values coming first
          return data.sort((a, b) => {
            if (a.pingstatus === '0' && b.pingstatus !== '0') {
              return -1;
            } else if (a.pingstatus !== '0' && b.pingstatus === '0') {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }

  getILOPingDataSortedByPingStatus(): Observable<ILOreport[]> {
    return this.client.get<ILOreport[]>('../../assets/data/serverilopingreport.json')
      .pipe(
        map((data: ILOreport[]) => {
          return data.sort((a, b) => {
            if (a.ilopingstatus === '0' && b.ilopingstatus !== '0') {
              return -1;
            } else if (a.ilopingstatus !== '0' && b.ilopingstatus === '0') {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }

  getdiskutilStatus(): Observable<Diskutil[]> {
    return this.client.get<Diskutil[]>('../../assets/data/diskUtilizationreport.json')
    .pipe(
      map((data: Diskutil[]) => {
        return data.sort((a, b) => {
          // Priority 1: 'Not Available'
          if (a.ServerStatus === 'Not Available' && b.ServerStatus !== 'Not Available') {
            return -1;
          } else if (a.ServerStatus !== 'Not Available' && b.ServerStatus === 'Not Available') {
            return 1;
          }

          // Priority 2: 3rd and 6th column values greater than 95
          const aGreaterThan95 = a.C_Utilization > 95 || a.F_Utilization > 95;
          const bGreaterThan95 = b.C_Utilization > 95 || b.F_Utilization > 95;
          if (aGreaterThan95 && !bGreaterThan95) {
            return -1;
          } else if (!aGreaterThan95 && bGreaterThan95) {
            return 1;
          }
          // Priority 3: 3rd and 6th column values between 90 and 95
          const aBetween90And95 = (a.C_Utilization >= 90 && a.C_Utilization <= 95) || (a.F_Utilization >= 90 && a.F_Utilization <= 95);
          const bBetween90And95 = (b.C_Utilization >= 90 && b.C_Utilization <= 95) || (b.F_Utilization >= 90 && b.F_Utilization <= 95);
          if (aBetween90And95 && !bBetween90And95) {
            return -1;
          } else if (!aBetween90And95 && bBetween90And95) {
            return 1;
          }

          // All other cases
          return 0;
        });
      })
    );
  }


// getUpsStatus(): Observable<ups[]> {
//   return this.client.get<ups[]>('../../assets/data/upsstatus.json')
//     .pipe(
//       map((data: ups[]) => {
//         return data.sort((a, b) => {
//           // Priority 0: Battery Ping status 0
//           if (a.ups_ping === 0 && b.ups_ping !== 0) {
//             return -1;
//           } else if (a.ups_ping !== 0 && b.ups_ping === 0) {
//             return 1;
//           }

//           // Priority 1: Input Voltage Thresholds
//           if (a.involt > 245 && b.involt <= 245) {
//             return -1;
//           } else if (a.involt <= 245 && b.involt > 245) {
//             return 1;
//           }

//           // Priority 2: Input Voltage Thresholds
//           if (a.involt < 200 && b.involt >= 200) {
//             return -1;
//           } else if (a.involt >= 200 && b.involt < 200) {
//             return 1;
//           }

//           // Priority 1: Battery Charge / Runtime Thresholds
//           const aLowCharge = a.chargeremaining < 15 || a.runtime_remaining < 15;
//           const bLowCharge = b.chargeremaining < 15 || b.runtime_remaining < 15;
//           if (aLowCharge && !bLowCharge) {
//             return -1;
//           } else if (!aLowCharge && bLowCharge) {
//             return 1;
//           }

//           // Priority 2: Battery Charge / Runtime Thresholds
//           const aMediumCharge = a.chargeremaining < 50 || a.runtime_remaining < 50;
//           const bMediumCharge = b.chargeremaining < 50 || b.runtime_remaining < 50;
//           if (aMediumCharge && !bMediumCharge) {
//             return -1;
//           } else if (!aMediumCharge && bMediumCharge) {
//             return 1;
//           }

//           // Priority 1: Battery Temperature Thresholds
//           if (a.temperature > 45 && b.temperature <= 45) {
//             return -1;
//           } else if (a.temperature <= 45 && b.temperature > 45) {
//             return 1;
//           }

//           // Priority 2: Battery Temperature Thresholds
//           if (a.temperature > 40 && b.temperature <= 40) {
//             return -1;
//           } else if (a.temperature <= 40 && b.temperature > 40) {
//             return 1;
//           }

//           // All other cases
//           return 0;
//         });
//       })
//     );
// }

getUpsStatus(): Observable<ups[]> {
  return this.client.get<ups[]>('../../assets/data/upsstatus.json')
    .pipe(
      map((data: ups[]) => {
        return data.sort((a, b) => {
          // Priority 1: UPS_Ping is 0
          if (a.UPS_Ping === 0 && b.UPS_Ping !== 0) {
            return -1;
          } else if (a.UPS_Ping !== 0 && b.UPS_Ping === 0) {
            return 1;
          }

          // Priority 2: UPS_Error_Code does not contain 'Success'
          const aErrorCodeNotSuccess = !a.UPS_Error_Code.includes('Success');
          const bErrorCodeNotSuccess = !b.UPS_Error_Code.includes('Success');
          if (aErrorCodeNotSuccess && !bErrorCodeNotSuccess) {
            return -1;
          } else if (!aErrorCodeNotSuccess && bErrorCodeNotSuccess) {
            return 1;
          }

          // Priority 3: Runtime_Remaining less than 15 minutes
          const aRuntimeLessThan15 = parseRuntime(a.Runtime_Remaining) < 15;
          const bRuntimeLessThan15 = parseRuntime(b.Runtime_Remaining) < 15;
          if (aRuntimeLessThan15 && !bRuntimeLessThan15) {
            return -1;
          } else if (!aRuntimeLessThan15 && bRuntimeLessThan15) {
            return 1;
          }

          // Priority 4: Battery Temperature Thresholds
          if (a.Battery_Temperature > 45 && b.Battery_Temperature <= 45) {
            return -1;
          } else if (a.Battery_Temperature <= 45 && b.Battery_Temperature > 45) {
            return 1;
          }

          if (a.Battery_Temperature > 40 && b.Battery_Temperature <= 40) {
            return -1;
          } else if (a.Battery_Temperature <= 40 && b.Battery_Temperature > 40) {
            return 1;
          }

          // All other cases
          return 0;
        });
      })
    );
}





  getTillPingStatus(): Observable<TillsStatus[]> {
    return this.client.get<TillsStatus[]>('../../assets/data/tillsreport.json')
      .pipe(
        map((data: TillsStatus[]) => {
          return data.sort((a, b) => {
            if (a.pingstatus === '0' && b.pingstatus !== '0') {
              return -1;
            } else if (a.pingstatus !== '0' && b.pingstatus === '0') {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }

  getDataRaidBatteryStatus(): Observable<RAIDModel[]> {
    return this.client.get<RAIDModel[]>('../../assets/data/serverraidbatteryreport.json')
      .pipe(
        map((data: RAIDModel[]) => {
          return data.sort((a, b) => {
            if (a.BatteryStatus === 0 && b.BatteryStatus !== 0) {
              return -1;
            } else if (a.BatteryStatus !== 0 && b.BatteryStatus === 0) {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }

  getDataRaidDiskStatus(): Observable<RAIDModel[]> {
    return this.client.get<RAIDModel[]>('../../assets/data/serverraiddiskreport.json')
      .pipe(
        map((data: RAIDModel[]) => {
          return data.sort((a, b) => {
            if (a.DiskStatus === 0 && b.DiskStatus !== 0) {
              return -1;
            } else if (a.DiskStatus !== 0 && b.DiskStatus === 0) {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }

  getDataSortedBynetworkSwitchStatus(): Observable<SwitchPing[]> {
    return this.client.get<SwitchPing[]>('../../assets/data/switchpingreport.json')
      .pipe(
        map((data: SwitchPing[]) => {
          return data.sort((a, b) => {
            if (a.switchpingstatus === '0' && b.switchpingstatus !== '0') {
              return -1;
            } else if (a.switchpingstatus !== '0' && b.switchpingstatus === '0') {
              return 1;
            } else {
              return 0;
            }
          });
        })
      );
  }
  
  getDataSortedByMemoryUtil(): Observable<Memoryutil[]> {
    return this.client.get<Memoryutil[]>('../../assets/data/memoryUtilization.json')
    .pipe(
      map(Response => {
        // Sorting the data based on column 'col3' in descending order
        Response.sort((a, b) => {
          // Convert the Usage values to numbers for comparison
          if (a.TotalRAM === 'NA' && b.TotalRAM === 'NA') {
            return 0; // Both are 'NA', maintain order
          } else if (a.TotalRAM === 'NA') {
            return -1; // 'a' is 'NA', so it comes first
          } else if (b.TotalRAM === 'NA') {
            return 1; // 'b' is 'NA', so it comes first
          } else {
          const numA = a.RAMUtil;
          const numB = b.RAMUtil;

          // Compare the numerical values
          return numB - numA; // Sorting in descending order
          }     
        });

        return Response;
      })
    );
  }

  getDataSortedByCPUMonitor(): Observable<CPUMonitor[]> {
    return this.client.get<CPUMonitor[]>('../../assets/data/storeservercpureport.json')
    .pipe(
      map(Response => {
        Response.sort((a, b) => {
        const usageA = Number(a.currentCPUUsage);
        const usageB = Number(b.currentCPUUsage);
        const statusA = Number(a.serverstatus);
        const statusB = Number(b.serverstatus);
        if (statusA === 0 && statusB !== 0) {
          return -1; // 'a' should come before 'b'
        } else if (statusA !== 0 && statusB === 0) {
          return 1; // 'b' should come before 'a'
        } else if (usageA === 100 && usageB !== 100) {
          return -1; // 'a' should come before 'b'
        } else if (usageA !== 100 && usageB === 100) {
          return 1; // 'b' should come before 'a'
        } else {
          return usageB - usageA;
        }
        });
        return Response;
      })
    );
  }


  getDataSortedByBackofficeStatus(): Observable<Backoffice[]> {
    return this.client.get<Backoffice[]>('../../assets/data/backofficeservicereport.json')
      .pipe(
        map((data: Backoffice[]) => {
          return data.sort((a, b) => {
            const aPriority = this.getPrioritynew(a);
            const bPriority = this.getPrioritynew(b);
            return bPriority - aPriority; // Sort in descending order of priority
          });
        })
      );
  }

  getDataSortedBydailybackup(): Observable<DailyBackup[]> {
    return this.client.get<DailyBackup[]>('../../assets/data/Dailybackupreport.json')
      .pipe(
        map((data: DailyBackup[]) => {
          return data.sort((a, b) => {
            const aPriority = this.getPriorityDB(a);
            const bPriority = this.getPriorityDB(b);
            return bPriority - aPriority; // Sort in descending order of priority
          });
        })
      );
  }

  getPriority(obj: any): number {
    if (Object.values(obj).includes('Failed')) {
      return 3; // Highest priority for 'Failed'
    } else if (Object.values(obj).includes('Not Available')) {
      return 2; // Second priority for 'Not Available'
    } else if (Object.values(obj).includes('Not Running')) {
      return 1; // Third priority for 'Not Running'
    } else {
      return 0; // Default priority for other cases
    }
  }

  


  getDataSortedByServerServiceStatus(): Observable<Backoffice[]> {
    return this.client.get<Backoffice[]>('../../assets/data/serverservicepingreport.json')
      .pipe(
        map((data: Backoffice[]) => {
          return data.sort((a, b) => {
            const aPriority = this.getPrioritynew(a);
            const bPriority = this.getPrioritynew(b);
            return bPriority - aPriority; // Sort in descending order of priority
          });
        })
      );
  }

  getPrioritynew(obj: any): number {
    let count = 0;
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] === 'Failed' || obj[key] === 'Not Running') {
          count++;
        }
      }
    }
  
    return count;
  }

  getPriorityDB(obj: any): number {
    let count = 0;
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] === 'Failed' || obj[key] === 'NA'|| obj[key] === 'Server Unavailable') {
          count++;
        }
      }
    }
  
    return count;
  }

  getDataSortedByBackupserverStatus(): Observable<BackupServer[]> {
    return this.client.get<BackupServer[]>('../../assets/data/ServersBackupStatus.json')
    .pipe(
      map(Response => {
        // Sorting the data based on column 'col3' in descending order
        Response.sort((a, b) => {
          const numA = a.priority;
          const numB = b.priority;
          return numB - numA;
        });
        return Response;
      })
    );
}
}

// Helper function to parse runtime into minutes
function parseRuntime(runtime: string): number {
  const timeParts = runtime.match(/(\d+)\s*hr\s*(\d+)\s*min\s*(\d+)\s*sec/);
  if (timeParts) {
    const hours = parseInt(timeParts[1], 10);
    const minutes = parseInt(timeParts[2], 10);
    const seconds = parseInt(timeParts[3], 10);
    return hours * 60 + minutes + seconds / 60;
  }
  return 0;
}
