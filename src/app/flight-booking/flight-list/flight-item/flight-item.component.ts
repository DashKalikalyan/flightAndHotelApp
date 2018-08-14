import { Component, OnInit, Input } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {
  @Input() flight;
  disabled = false;
  selected = true;
  constructor() { }

  ngOnInit() {
  }

  presentOrNot(convenience) {
    return this.flight.convenienceAvailable.hasOwnProperty(convenience);
  }
}
