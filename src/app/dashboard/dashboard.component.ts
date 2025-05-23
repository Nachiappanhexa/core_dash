import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { dashboard } from '../models/fullmodels';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData: dashboard[] = [];
  showLastDiv: boolean = false;
  private subscription: Subscription | undefined;
  Customername: any="Wickes";

  constructor(private httpClient: HttpClient,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLastDiv = true;
    }, 100);
    this.getAlldashboards();
    // interval(1000).subscribe(() => {
    //   this.getAlldashboards();
    // });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  getAlldashboards() {

    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    
    if (this.subscription) {
      this.subscription.unsubscribe(); // Unsubscribe from previous subscription
    }
    this.subscription = this.httpClient.get<dashboard[]>('../../assets/data/dashboard.json', {headers}).subscribe({
      next: (data) => {
        this.dashboardData = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  getAlldashboards1() {
    this.httpClient.get<dashboard[]>('../../assets/data/dashboard.json').subscribe({
      next: (data) => {
        this.dashboardData = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}


