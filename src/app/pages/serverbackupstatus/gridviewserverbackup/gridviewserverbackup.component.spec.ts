import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewserverbackupComponent } from './gridviewserverbackup.component';

describe('GridviewserverbackupComponent', () => {
  let component: GridviewserverbackupComponent;
  let fixture: ComponentFixture<GridviewserverbackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridviewserverbackupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridviewserverbackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
