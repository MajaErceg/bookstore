import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGiftComponent } from './insert-gift.component';

describe('InsertGiftComponent', () => {
  let component: InsertGiftComponent;
  let fixture: ComponentFixture<InsertGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
