import { Component, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './gradient-pie-chart.component.html',
  styleUrls: ['./gradient-pie-chart.component.css']
})
export class Gradientpiechart implements AfterViewInit {
  @Input() data: { online: number; offline: number; inprogress: number; total: number; title: string; page: string } = {
    online: 0,
    offline: 0,
    inprogress:0,
    total: 0,
    title: '',
    page: ''
  };

  chartType: string = ''; // Will hold the type of chart (pie, gauge, ring gauge)
  chartOptions: any;
  chart!: ApexCharts;

  constructor(private elementRef: ElementRef, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the chart type from the query parameter
    this.route.params.subscribe((params) => {
      const dashboardId = params['id'];
      this.chartType = 'donut';
    });
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }


  prepareChartOptions(): void {
    // Dynamically build series and labels, hiding 'Inprogress' if value is 0
    const series = [this.data.online, this.data.offline];
    const labels = ['Online', 'Offline'];
    if (this.data.inprogress > 0) {
      series.push(this.data.inprogress);
      labels.push('Inprogress');
    }
    this.chartOptions = {
      chart: {
        type: 'donut',
      },
      series,
      labels,
      title: {
        text: this.data.title,
        align: 'center',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'black',
        },
      },
      colors: ['#28a745', '#ff0000','#ffc107'],
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: () => this.data.total,
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'diagonal1',
          shadeIntensity: 0.5,
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => `${val} servers`,
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },
    };
  }
  getDynamicLabels(page: string): string[] {
  if (page === 'memoryutil'|| page === 'cpu') {
    return ['<95%', '>95%'];
  } else if (page === 'serverdisk') {
    return ['<90%', '>90%', 'Inprogress'];
  } else if (page === 'serverbackup'|| page === 'dailybackup') {
    return ['Completed', 'Failed', 'R/F/NR'];
  } else {
    return ['Online','Offline','Inprogress'];
  }
}

  renderChart(): void {
    const chartId = `chart-${this.sanitizeId(this.data.title)}`;
    const chartDom = this.elementRef.nativeElement.querySelector(`#${chartId}`) as HTMLElement;

    if (!chartDom) {
      console.error(`Chart container with ID ${chartId} not found.`);
      return;
    }

    this.prepareChartOptions();

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new ApexCharts(chartDom, this.chartOptions);
    this.chart.render();
  }

  sanitizeId(title: string): string {
    return title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
  }
}
