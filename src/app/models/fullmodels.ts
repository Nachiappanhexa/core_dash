export interface FullmodelsTs {
}

export interface dashboard{
    overallpercentage:number;
    totalcount:number;
    online:number;
    offine:number;
    inprogress:number;
    title:string;
    page:string;
}

export interface Pingreport{
    ID:number;
    ServerName:string;
    Location:number;
    pingstatus:string;
}

export interface ILOreport{
    ID:number;
    servername:string;
    ilo:string;
    Location:number;
    ilopingstatus:string;
}

export interface Diskutil{
    ServerName:string;
    Location:string;
    C_Utilization:number;
    F_Utilization:number;
    C_Free:number;
    F_Free:number;
    C_Total:number;
    F_Total:number;
    ServerStatus:string;
}

export interface ups{
    UPS_IP:string;
    UPS_Location:string;
    upsStatus:string;
    Runtime_Remaining:string;
    Battery_Percentage:any;
    Battery_Temperature:any;
    Management_Uptime:string;
    UPS_Error_Code:string;
    UPS_Ping:number;
}

export interface Backoffice{
    ServerName:string;
    Location:string;
    Serverstatus:string;
    RTIAgentDefault:string;
    RTIBroadcastManager:string;
    RTIRemoteManagement:string;
    CtsApplicationService:string;
    MSSQLSERVER:string;
    ReportServer:string;
    MSSQLFDLauncher:string;
    SQLWriter:string;
}

export interface DailyBackup{
    ServerName:string;
    Location:string;
    BackupStatus:string;
    AvailableBackup:string;
    LastEncryptedDate:string;
    EncryptionStatus:string;
    Message:string;
    priority:string;
}


export interface Memoryutil{
    ServerName:string;
    Location:string;
    TotalRAM:string;
    RAMUtil:number;
    Status:number;
}

export interface CPUMonitor{
    ServerName:string;
    Location:string;
    serverstatus:string;
    currentCPUUsage:number;

}
export interface BackupServer{
    ServerName:string;
    Location:string;
    BackupStatus:string;
    AvailableBackup:string;
    priority:number;

}

export interface storeserver{
    ServerName:string;
    Location:string;
    serverstatus:string;
    currentCPUUsage:number;
}

export interface TillsStatus{
    workstation:string;
    name:string;
    store:string;
    ip:string;
    pingstatus:string;

}

export interface SwitchPing{
    switchName:string;
    Location:string;
    switchpingstatus:string;

}

export interface LocationModel {

    ID:number;
    ServerName:string;
    Location:string;
    pingstatus:string;
    latitude:string;
    longitude:string;
}

export interface CPUMeterModel{

    ServerName:  string;
    Location:  string;
    serverstatus: string;
    currentCPUUsage:  number;
}

export interface RAIDModel
{
    ServerName:  string;
    Location:  string;
    HardwareModel: string;
    BatteryStatus:number;
    DiskStatus:number;
    Errors: string;

}