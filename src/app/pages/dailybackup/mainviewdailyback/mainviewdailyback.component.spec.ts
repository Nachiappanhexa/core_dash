import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewdailybackComponent } from './mainviewdailyback.component';

describe('MainviewdailybackComponent', () => {
  let component: MainviewdailybackComponent;
  let fixture: ComponentFixture<MainviewdailybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewdailybackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewdailybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
