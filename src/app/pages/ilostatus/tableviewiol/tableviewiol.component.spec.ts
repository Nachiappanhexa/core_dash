import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewiolComponent } from './tableviewiol.component';

describe('TableviewiolComponent', () => {
  let component: TableviewiolComponent;
  let fixture: ComponentFixture<TableviewiolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewiolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewiolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
