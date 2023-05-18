import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKidsComponent } from './my-kids.component';

describe('MyKidsComponent', () => {
  let component: MyKidsComponent;
  let fixture: ComponentFixture<MyKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
