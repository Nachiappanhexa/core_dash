import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewnetworkComponent } from './tableviewnetwork.component';

describe('TableviewnetworkComponent', () => {
  let component: TableviewnetworkComponent;
  let fixture: ComponentFixture<TableviewnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewnetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
