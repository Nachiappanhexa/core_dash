import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewbackofficeComponent } from './gridviewbackoffice.component';

describe('GridviewbackofficeComponent', () => {
  let component: GridviewbackofficeComponent;
  let fixture: ComponentFixture<GridviewbackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewbackofficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewbackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
