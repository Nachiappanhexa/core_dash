import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gridviewdiskutilComponent } from './gridviewdiskutil.component';

describe('gridviewdiskutilComponent', () => {
  let component: gridviewdiskutilComponent;
  let fixture: ComponentFixture<gridviewdiskutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [gridviewdiskutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(gridviewdiskutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
