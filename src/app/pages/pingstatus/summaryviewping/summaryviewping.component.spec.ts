import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewpingComponent } from './summaryviewping.component';

describe('SummaryviewpingComponent', () => {
  let component: SummaryviewpingComponent;
  let fixture: ComponentFixture<SummaryviewpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewpingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
