import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewnetworkComponent } from './gridviewnetwork.component';

describe('GridviewnetworkComponent', () => {
  let component: GridviewnetworkComponent;
  let fixture: ComponentFixture<GridviewnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewnetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
