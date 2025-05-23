import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewtillComponent } from './mainviewtill.component';

describe('MainviewtillComponent', () => {
  let component: MainviewtillComponent;
  let fixture: ComponentFixture<MainviewtillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewtillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewtillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
