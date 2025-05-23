import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewbatteryComponent } from './mainviewbattery.component';

describe('MainviewbatteryComponent', () => {
  let component: MainviewbatteryComponent;
  let fixture: ComponentFixture<MainviewbatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewbatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewbatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
