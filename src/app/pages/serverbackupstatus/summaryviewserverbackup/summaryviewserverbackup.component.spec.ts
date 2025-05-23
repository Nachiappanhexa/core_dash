import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewserverbackupComponent } from './summaryviewserverbackup.component';

describe('SummaryviewserverbackupComponent', () => {
  let component: SummaryviewserverbackupComponent;
  let fixture: ComponentFixture<SummaryviewserverbackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewserverbackupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewserverbackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
