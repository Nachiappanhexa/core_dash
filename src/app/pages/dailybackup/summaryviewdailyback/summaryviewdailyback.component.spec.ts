import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewdailybackComponent } from './summaryviewdailyback.component';

describe('SummaryviewdailybackComponent', () => {
  let component: SummaryviewdailybackComponent;
  let fixture: ComponentFixture<SummaryviewdailybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewdailybackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewdailybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
