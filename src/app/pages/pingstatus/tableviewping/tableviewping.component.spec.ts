import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewpingComponent } from './tableviewping.component';

describe('TableviewpingComponent', () => {
  let component: TableviewpingComponent;
  let fixture: ComponentFixture<TableviewpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewpingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
