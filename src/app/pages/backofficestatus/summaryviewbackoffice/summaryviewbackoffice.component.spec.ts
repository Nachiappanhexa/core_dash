import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryviewbackofficeComponent } from './summaryviewbackoffice.component';

describe('SummaryviewbackofficeComponent', () => {
  let component: SummaryviewbackofficeComponent;
  let fixture: ComponentFixture<SummaryviewbackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryviewbackofficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryviewbackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
