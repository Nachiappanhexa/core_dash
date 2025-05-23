import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mainviewdiskutilComponent } from './mainviewdiskutil.component';

describe('mainviewdiskutilComponent', () => {
  let component: mainviewdiskutilComponent;
  let fixture: ComponentFixture<mainviewdiskutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [mainviewdiskutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(mainviewdiskutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
