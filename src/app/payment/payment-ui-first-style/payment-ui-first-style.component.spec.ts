import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUiFirstStyleComponent } from './payment-ui-first-style.component';

describe('PaymentUiFirstStyleComponent', () => {
  let component: PaymentUiFirstStyleComponent;
  let fixture: ComponentFixture<PaymentUiFirstStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentUiFirstStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentUiFirstStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
