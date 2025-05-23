import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewcpuComponent } from './tableviewcpu.component';

describe('TableviewcpuComponent', () => {
  let component: TableviewcpuComponent;
  let fixture: ComponentFixture<TableviewcpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewcpuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewcpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
