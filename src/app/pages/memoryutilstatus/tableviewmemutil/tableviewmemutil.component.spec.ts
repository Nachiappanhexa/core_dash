import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewmemutilComponent } from './tableviewmemutil.component';

describe('TableviewmemutilComponent', () => {
  let component: TableviewmemutilComponent;
  let fixture: ComponentFixture<TableviewmemutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewmemutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewmemutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
