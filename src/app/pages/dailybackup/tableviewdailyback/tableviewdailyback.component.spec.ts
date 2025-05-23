import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewdailybackComponent } from './tableviewdailyback.component';

describe('TableviewdailybackComponent', () => {
  let component: TableviewdailybackComponent;
  let fixture: ComponentFixture<TableviewdailybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewdailybackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewdailybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
