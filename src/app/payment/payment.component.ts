import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentMethodMap = new Map<string, boolean>();

  constructor() {
  }

  ngOnInit() {
    this.paymentMethodMap.set('credit-card', true)
      .set('debit-card', false)
      .set('mobile-wallet', false)
      .set('net-banking', false);
  }

  isItSelected(type) {
    return this.paymentMethodMap.get(type);
  }

  selectThis(type) {
    this.reset();
    this.paymentMethodMap.set(type, true);
  }

  reset() {
    this.paymentMethodMap.forEach((value, key, map) => {
      map.set(key, false);
    });
  }
}
