import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewserverbackupComponent } from './mainviewserverbackup.component';

describe('MainviewserverbackupComponent', () => {
  let component: MainviewserverbackupComponent;
  let fixture: ComponentFixture<MainviewserverbackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewserverbackupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewserverbackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
