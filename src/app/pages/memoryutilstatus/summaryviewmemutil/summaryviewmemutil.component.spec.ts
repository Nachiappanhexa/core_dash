import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewmemutilComponent } from './summaryviewmemutil.component';

describe('SummaryviewmemutilComponent', () => {
  let component: SummaryviewmemutilComponent;
  let fixture: ComponentFixture<SummaryviewmemutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewmemutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewmemutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
