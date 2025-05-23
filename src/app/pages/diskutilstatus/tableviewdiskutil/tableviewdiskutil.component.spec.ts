import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tableviewdiskutilComponent } from './tableviewdiskutil.component';

describe('tableviewdiskutilComponent', () => {
  let component: tableviewdiskutilComponent;
  let fixture: ComponentFixture<tableviewdiskutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tableviewdiskutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(tableviewdiskutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
