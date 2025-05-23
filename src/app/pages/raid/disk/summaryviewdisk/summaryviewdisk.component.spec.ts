import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewdiskComponent } from './summaryviewdisk.component';

describe('SummaryviewdiskComponent', () => {
  let component: SummaryviewdiskComponent;
  let fixture: ComponentFixture<SummaryviewdiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewdiskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
