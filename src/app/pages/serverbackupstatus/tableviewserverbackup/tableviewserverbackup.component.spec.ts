import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewserverbackupComponent } from './tableviewserverbackup.component';

describe('TableviewserverbackupComponent', () => {
  let component: TableviewserverbackupComponent;
  let fixture: ComponentFixture<TableviewserverbackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableviewserverbackupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableviewserverbackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
