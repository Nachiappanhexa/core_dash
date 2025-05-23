import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewpingComponent } from './mainviewping.component';

describe('MainviewpingComponent', () => {
  let component: MainviewpingComponent;
  let fixture: ComponentFixture<MainviewpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewpingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
