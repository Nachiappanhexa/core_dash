import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewiolComponent } from './summaryviewiol.component';

describe('SummaryviewiolComponent', () => {
  let component: SummaryviewiolComponent;
  let fixture: ComponentFixture<SummaryviewiolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewiolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewiolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
