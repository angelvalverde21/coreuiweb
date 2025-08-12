import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIndexRowDropdownComponent } from './category-index-row-dropdown.component';

describe('CategoryIndexRowDropdownComponent', () => {
  let component: CategoryIndexRowDropdownComponent;
  let fixture: ComponentFixture<CategoryIndexRowDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryIndexRowDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryIndexRowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
