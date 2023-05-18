import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageKidsComponent } from './page-kids.component';

describe('PageKidsComponent', () => {
  let component: PageKidsComponent;
  let fixture: ComponentFixture<PageKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
