import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'Graph',
        icon: 'fal fa-chart-line',
        label: 'Graph',
        expanded: true,
        items: [
            {
                routeLink: 'http://wssrm.ad.wickes.co.uk/Monotringlogs/ServerPingMonitoringLogs',
                label: 'pingchart'
            },
            {
                routeLink: 'Logs/OtherLogs',
                label: 'tillpingchart'
            }
        ]
    },
    {
        routeLink: 'Logs',
        icon: 'fal fa-archive',
        label: 'Logs',
        expanded: true,
        items: [
            {
                routeLink: 'http://wssrm.ad.wickes.co.uk/Monotringlogs/ServerPingMonitoringLogs',
                label: 'ServerLogs'
            },
            {
                routeLink: 'Logs/OtherLogs',
                label: 'OtherLogs'
            }
        ]
    }
];