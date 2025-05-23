import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewdiskComponent } from './tableviewdisk.component';

describe('TableviewdiskComponent', () => {
  let component: TableviewdiskComponent;
  let fixture: ComponentFixture<TableviewdiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewdiskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
