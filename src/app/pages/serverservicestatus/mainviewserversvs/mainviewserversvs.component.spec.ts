import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewserversvsComponent } from './mainviewserversvs.component';

describe('MainviewserversvsComponent', () => {
  let component: MainviewserversvsComponent;
  let fixture: ComponentFixture<MainviewserversvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewserversvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewserversvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
