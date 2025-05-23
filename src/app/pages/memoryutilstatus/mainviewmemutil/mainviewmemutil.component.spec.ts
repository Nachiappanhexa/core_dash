import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewmemutilComponent } from './mainviewmemutil.component';

describe('MainviewmemutilComponent', () => {
  let component: MainviewmemutilComponent;
  let fixture: ComponentFixture<MainviewmemutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewmemutilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewmemutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
