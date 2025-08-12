import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIndexRowDropdownComponent } from './brand-index-row-dropdown.component';

describe('BrandIndexRowDropdownComponent', () => {
  let component: BrandIndexRowDropdownComponent;
  let fixture: ComponentFixture<BrandIndexRowDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandIndexRowDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandIndexRowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
