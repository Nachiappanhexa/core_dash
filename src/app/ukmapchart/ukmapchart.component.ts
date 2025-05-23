import { Component, OnInit, OnDestroy, NgZone, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/ukCountiesHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ApiServiceTS } from '../services/apicalls';
import { LocationModel } from '../models/fullmodels';

@Component({
  selector: 'app-ukmapchart',
  templateUrl: './ukmapchart.component.html',
  styleUrls: ['./ukmapchart.component.css']
})
export class UkmapchartComponent implements OnInit, OnDestroy {
  fullchart!: am4maps.MapChart;
  LocationPingData: LocationModel[] = [];
  offlineCount=0;
  private subscription: Subscription | undefined;
  private mapInitialized: boolean = false;
  
  @Output() 
  locationData: EventEmitter<LocationModel[]> = new EventEmitter<LocationModel[]>();

  constructor(private ApiService: ApiServiceTS, private zone: NgZone, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.adjustDisplay();
    window.addEventListener('resize', () => this.adjustDisplay());
    this.getPingDatabyLocation();
  }

  adjustDisplay() {
    const parentWidth = this.elementRef.nativeElement.parentElement.offsetWidth;
    const chartDiv = this.elementRef.nativeElement.querySelector('#chartdiv');
    const isSmallParent = parentWidth < 600;
    if (isSmallParent) {
      chartDiv.classList.add('small-parent-chart');
    } else {
      chartDiv.classList.remove('small-parent-chart');
    }
  }

  getPingDatabyLocation() {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Unsubscribe from previous subscription
    }
    this.subscription = this.ApiService.getserverpingbyLocation().subscribe((data) => {
      this.LocationPingData = data;
      this.locationData.emit(this.LocationPingData);
      this.offlineCount = this.LocationPingData.filter(location => location.pingstatus === '0').length;
      this.zone.runOutsideAngular(() => {
        if (!this.mapInitialized) {
          this.initializeMap();
          this.mapInitialized = true;
        } else {
          this.updateMapData();
        }
      });
    });
  }

  initializeMap() {
    am4core.useTheme(am4themes_animated);
    this.fullchart = am4core.create("chartdiv", am4maps.MapChart);
    this.fullchart.logo.disabled = true;
    this.fullchart.geodata = am4geodata_worldLow;
    this.fullchart.projection = new am4maps.projections.Miller();
    var polygonSeries = this.fullchart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = this.fullchart.colors.getIndex(0);
    this.updateMapData();
  }

  updateMapData() {
    var imageSeries = this.fullchart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "Location: {Location}\r\nServerName: {ServerName}\r\nStatus: {pingstatus}";
    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 2;
    circle.propertyFields.fill = "color";
    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 2;
    circle2.propertyFields.fill = "color";
    circle2.events.on("inited", function (event) {
      animateBullet(event.target);
    });
    function animateBullet(circle: am4core.Circle) {
      var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 0.65, to: 0 }], 3000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(circle);
      });
    }
    var colorSet = new am4core.ColorSet();
    imageSeries.data = this.LocationPingData.map(location => {
      return {
        longitude: location.longitude,
        latitude: location.latitude,
        Location: location.Location,
        ServerName: location.ServerName,
                pingstatus: location.pingstatus,
        color: location.pingstatus === '1' ? am4core.color('green') : am4core.color('red')
      };
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.zone.runOutsideAngular(() => {
      if (this.fullchart) {
        this.fullchart.dispose();
      }
    });
  }
}

