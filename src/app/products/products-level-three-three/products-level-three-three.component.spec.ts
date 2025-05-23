import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelThreeThreeComponent } from './products-level-three-three.component';

describe('ProductsLevelThreeThreeComponent', () => {
  let component: ProductsLevelThreeThreeComponent;
  let fixture: ComponentFixture<ProductsLevelThreeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsLevelThreeThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsLevelThreeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
