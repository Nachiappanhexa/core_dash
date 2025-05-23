import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewbatteryComponent } from './summaryviewbattery.component';

describe('SummaryviewbatteryComponent', () => {
  let component: SummaryviewbatteryComponent;
  let fixture: ComponentFixture<SummaryviewbatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewbatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewbatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
