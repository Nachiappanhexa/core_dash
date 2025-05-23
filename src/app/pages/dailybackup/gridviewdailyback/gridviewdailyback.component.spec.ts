import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewdailybackComponent } from './gridviewdailyback.component';

describe('GridviewdailybackComponent', () => {
  let component: GridviewdailybackComponent;
  let fixture: ComponentFixture<GridviewdailybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewdailybackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewdailybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
