import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewcpuComponent } from './summaryviewcpu.component';

describe('SummaryviewcpuComponent', () => {
  let component: SummaryviewcpuComponent;
  let fixture: ComponentFixture<SummaryviewcpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewcpuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewcpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
