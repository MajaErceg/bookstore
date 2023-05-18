import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGiftComponent } from './page-gift.component';

describe('PageGiftComponent', () => {
  let component: PageGiftComponent;
  let fixture: ComponentFixture<PageGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
