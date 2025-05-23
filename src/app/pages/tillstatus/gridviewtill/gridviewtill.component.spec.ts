import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewtillComponent } from './gridviewtill.component';

describe('GridviewtillComponent', () => {
  let component: GridviewtillComponent;
  let fixture: ComponentFixture<GridviewtillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewtillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewtillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
