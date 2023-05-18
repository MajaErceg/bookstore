import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccessoriesComponent } from './my-accessories.component';

describe('MyAccessoriesComponent', () => {
  let component: MyAccessoriesComponent;
  let fixture: ComponentFixture<MyAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
