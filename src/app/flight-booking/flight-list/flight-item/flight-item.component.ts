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
  showDetails = false;

  constructor() {
  }

  ngOnInit() {
  }

  presentOrNot(convenience) {
    return this.flight.convenienceAvailable.hasOwnProperty(convenience);
  }

  timeConversion(millisec) {
    const hours = (millisec / 3600000).toFixed(0);
    const minutes = ((millisec % 3600000) / 60000).toFixed(0);
    return hours + ' h ' + minutes + ' m';
  }
}
