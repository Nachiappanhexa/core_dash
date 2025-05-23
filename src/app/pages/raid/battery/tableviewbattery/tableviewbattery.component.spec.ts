import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewbatteryComponent } from './tableviewbattery.component';

describe('TableviewbatteryComponent', () => {
  let component: TableviewbatteryComponent;
  let fixture: ComponentFixture<TableviewbatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewbatteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewbatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
