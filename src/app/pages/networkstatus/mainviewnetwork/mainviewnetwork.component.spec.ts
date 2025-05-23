import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewnetworkComponent } from './mainviewnetwork.component';

describe('MainviewnetworkComponent', () => {
  let component: MainviewnetworkComponent;
  let fixture: ComponentFixture<MainviewnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewnetworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
