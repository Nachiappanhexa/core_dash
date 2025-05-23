import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mainviewupsComponent } from './mainviewups.component';

describe('mainviewupsComponent', () => {
  let component: mainviewupsComponent;
  let fixture: ComponentFixture<mainviewupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [mainviewupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(mainviewupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
