import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewpingComponent } from './gridviewping.component';

describe('GridviewpingComponent', () => {
  let component: GridviewpingComponent;
  let fixture: ComponentFixture<GridviewpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewpingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
