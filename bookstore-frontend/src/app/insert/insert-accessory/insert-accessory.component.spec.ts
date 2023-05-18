import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAccessoryComponent } from './insert-accessory.component';

describe('InsertAccessoryComponent', () => {
  let component: InsertAccessoryComponent;
  let fixture: ComponentFixture<InsertAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAccessoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
