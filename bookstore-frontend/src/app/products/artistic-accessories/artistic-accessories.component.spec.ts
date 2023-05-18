import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisticAccessoriesComponent } from './artistic-accessories.component';

describe('ArtisticAccessoriesComponent', () => {
  let component: ArtisticAccessoriesComponent;
  let fixture: ComponentFixture<ArtisticAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisticAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisticAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
