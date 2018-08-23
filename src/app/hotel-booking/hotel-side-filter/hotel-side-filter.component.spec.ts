import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSideFilterComponent } from './hotel-side-filter.component';

describe('HotelSideFilterComponent', () => {
  let component: HotelSideFilterComponent;
  let fixture: ComponentFixture<HotelSideFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSideFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
