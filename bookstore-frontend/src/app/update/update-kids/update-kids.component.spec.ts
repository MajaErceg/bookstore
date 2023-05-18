import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKidsComponent } from './update-kids.component';

describe('UpdateKidsComponent', () => {
  let component: UpdateKidsComponent;
  let fixture: ComponentFixture<UpdateKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
