import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewbatteryComponent } from './gridviewbattery.component';

describe('GridviewbatteryComponent', () => {
  let component: GridviewbatteryComponent;
  let fixture: ComponentFixture<GridviewbatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewbatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewbatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
