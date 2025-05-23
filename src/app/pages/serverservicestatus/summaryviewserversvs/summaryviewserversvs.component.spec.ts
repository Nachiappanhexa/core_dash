import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewserversvsComponent } from './summaryviewserversvs.component';

describe('SummaryviewserversvsComponent', () => {
  let component: SummaryviewserversvsComponent;
  let fixture: ComponentFixture<SummaryviewserversvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewserversvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewserversvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
