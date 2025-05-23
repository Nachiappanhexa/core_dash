import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewbackofficeComponent } from './mainviewbackoffice.component';

describe('MainviewbackofficeComponent', () => {
  let component: MainviewbackofficeComponent;
  let fixture: ComponentFixture<MainviewbackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewbackofficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewbackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
