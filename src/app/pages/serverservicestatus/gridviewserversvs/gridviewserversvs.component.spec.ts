import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewserversvsComponent } from './gridviewserversvs.component';

describe('GridviewserversvsComponent', () => {
  let component: GridviewserversvsComponent;
  let fixture: ComponentFixture<GridviewserversvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewserversvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewserversvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
