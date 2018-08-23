import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-ui-first-style',
  templateUrl: './payment-ui-first-style.component.html',
  styleUrls: ['./payment-ui-first-style.component.css']
})
export class PaymentUiFirstStyleComponent implements OnInit {
  selectedPaymentPlan = 'full';
  disabled = false;
  constructor() { }
  ngOnInit() {
  }
}
