import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmapchartComponent } from './ukmapchart.component';

describe('UkmapchartComponent', () => {
  let component: UkmapchartComponent;
  let fixture: ComponentFixture<UkmapchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UkmapchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UkmapchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
