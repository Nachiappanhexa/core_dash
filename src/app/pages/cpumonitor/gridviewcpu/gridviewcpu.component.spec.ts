import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewcpuComponent } from './gridviewcpu.component';

describe('GridviewcpuComponent', () => {
  let component: GridviewcpuComponent;
  let fixture: ComponentFixture<GridviewcpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewcpuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewcpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
