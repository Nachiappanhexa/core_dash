import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewserversvsComponent } from './tableviewserversvs.component';

describe('TableviewserversvsComponent', () => {
  let component: TableviewserversvsComponent;
  let fixture: ComponentFixture<TableviewserversvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewserversvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewserversvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
