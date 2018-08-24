import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPricePayNowComponent } from './total-price-pay-now.component';

describe('TotalPricePayNowComponent', () => {
  let component: TotalPricePayNowComponent;
  let fixture: ComponentFixture<TotalPricePayNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPricePayNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPricePayNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
