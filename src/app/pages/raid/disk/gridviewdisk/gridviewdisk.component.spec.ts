import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewdiskComponent } from './gridviewdisk.component';

describe('GridviewdiskComponent', () => {
  let component: GridviewdiskComponent;
  let fixture: ComponentFixture<GridviewdiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewdiskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
