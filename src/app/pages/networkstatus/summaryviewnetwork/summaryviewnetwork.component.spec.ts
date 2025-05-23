import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewnetworkComponent } from './summaryviewnetwork.component';

describe('SummaryviewnetworkComponent', () => {
  let component: SummaryviewnetworkComponent;
  let fixture: ComponentFixture<SummaryviewnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewnetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
