import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewtillComponent } from './tableviewtill.component';

describe('TableviewtillComponent', () => {
  let component: TableviewtillComponent;
  let fixture: ComponentFixture<TableviewtillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewtillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewtillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
