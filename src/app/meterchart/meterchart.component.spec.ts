import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterchartComponent } from './meterchart.component';

describe('MeterchartComponent', () => {
  let component: MeterchartComponent;
  let fixture: ComponentFixture<MeterchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeterchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
