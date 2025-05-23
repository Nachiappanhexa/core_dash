import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewbackofficeComponent } from './tableviewbackoffice.component';

describe('TableviewbackofficeComponent', () => {
  let component: TableviewbackofficeComponent;
  let fixture: ComponentFixture<TableviewbackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewbackofficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewbackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
