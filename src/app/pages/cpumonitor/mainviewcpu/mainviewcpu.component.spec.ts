import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewcpuComponent } from './mainviewcpu.component';

describe('MainviewcpuComponent', () => {
  let component: MainviewcpuComponent;
  let fixture: ComponentFixture<MainviewcpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewcpuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewcpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
