import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertKidsComponent } from './insert-kids.component';

describe('InsertKidsComponent', () => {
  let component: InsertKidsComponent;
  let fixture: ComponentFixture<InsertKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
