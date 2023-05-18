import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccessoryComponent } from './page-accessory.component';

describe('PageAccessoryComponent', () => {
  let component: PageAccessoryComponent;
  let fixture: ComponentFixture<PageAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccessoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
