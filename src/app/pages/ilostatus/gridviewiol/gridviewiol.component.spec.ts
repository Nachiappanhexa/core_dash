import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewiolComponent } from './gridviewiol.component';

describe('GridviewiolComponent', () => {
  let component: GridviewiolComponent;
  let fixture: ComponentFixture<GridviewiolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewiolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewiolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
