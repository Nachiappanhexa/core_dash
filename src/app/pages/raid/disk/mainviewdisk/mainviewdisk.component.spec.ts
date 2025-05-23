import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewdiskComponent } from './mainviewdisk.component';

describe('MainviewdiskComponent', () => {
  let component: MainviewdiskComponent;
  let fixture: ComponentFixture<MainviewdiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewdiskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
