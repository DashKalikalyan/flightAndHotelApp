import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumPriceInAirlineComponent } from './minimum-price-in-airline.component';

describe('MinimumPriceInAirlineComponent', () => {
  let component: MinimumPriceInAirlineComponent;
  let fixture: ComponentFixture<MinimumPriceInAirlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimumPriceInAirlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimumPriceInAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
