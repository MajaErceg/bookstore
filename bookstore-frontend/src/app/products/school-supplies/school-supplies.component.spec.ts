import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSuppliesComponent } from './school-supplies.component';

describe('SchoolSuppliesComponent', () => {
  let component: SchoolSuppliesComponent;
  let fixture: ComponentFixture<SchoolSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolSuppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
