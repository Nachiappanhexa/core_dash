import { Component, ModuleWithProviders,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { dashboard } from '../models/fullmodels';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css'
})
export class CircleComponent {
  @Input()
  data!: dashboard;

  
  @Input() manualroute: string | null = null;
  
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  }
}
