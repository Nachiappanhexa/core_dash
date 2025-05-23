import { ComponentFixture, TestBed } from '@angular/core/testing';

import { summaryviewdiskutilComponent } from './summaryviewdiskutil.component';

describe('summaryviewdiskutilComponent', () => {
  let component: summaryviewdiskutilComponent;
  let fixture: ComponentFixture<summaryviewdiskutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [summaryviewdiskutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(summaryviewdiskutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
