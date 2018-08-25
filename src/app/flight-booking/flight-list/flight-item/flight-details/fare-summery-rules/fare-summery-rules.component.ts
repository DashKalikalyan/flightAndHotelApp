import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-fare-summery-rules',
  templateUrl: './fare-summery-rules.component.html',
  styleUrls: ['./fare-summery-rules.component.css']
})
export class FareSummeryRulesComponent implements OnInit {
  @Input() flight;

  constructor() {
  }

  ngOnInit() {
  }

  getTax() {
    return Math.round(this.flight.price * 0.2);
  }

  getBase() {
    return Math.round(this.flight.price * 0.8);
  }

}
