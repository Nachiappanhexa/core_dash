import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewtillComponent } from './summaryviewtill.component';

describe('SummaryviewtillComponent', () => {
  let component: SummaryviewtillComponent;
  let fixture: ComponentFixture<SummaryviewtillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewtillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewtillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
