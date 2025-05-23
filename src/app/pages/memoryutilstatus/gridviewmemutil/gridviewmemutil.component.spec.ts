import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewmemutilComponent } from './gridviewmemutil.component';

describe('GridviewmemutilComponent', () => {
  let component: GridviewmemutilComponent;
  let fixture: ComponentFixture<GridviewmemutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewmemutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewmemutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
