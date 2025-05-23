import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gradientpiechart } from './gradient-pie-chart.component';

describe('Gradientpiechart', () => {
  let component: Gradientpiechart;
  let fixture: ComponentFixture<Gradientpiechart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gradientpiechart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gradientpiechart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
