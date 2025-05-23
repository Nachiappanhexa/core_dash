import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewiolComponent } from './mainviewiol.component';

describe('MainviewiolComponent', () => {
  let component: MainviewiolComponent;
  let fixture: ComponentFixture<MainviewiolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewiolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewiolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
