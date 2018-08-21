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
  flightInclusionMap = new Map<number, boolean>();
  showFare = false;
  convenience;
  flightInclusion = [];
  constructor() {
  }

  ngOnInit() {
    this.flightInclusion.push({code: this.flight.fromCode, place: this.flight.from});
    this.flight.layOverDetails.forEach((el) => {
      this.flightInclusion.push({code: el.viaCode, place: el.via});
    });
    this.flightInclusion.push({code: this.flight.toCode, place: this.flight.to});
    for (let i = 0; i < this.flightInclusion.length - 1; i++) {
      if (i === 0) {
        this.flightInclusionMap.set(i, true);
      } else {
        this.flightInclusionMap.set(i, false);
      }
    }
    console.log(this.flightInclusion);
    this.convenience = this.flight.convenienceAvailable;
  }

  presentOrNot(convenience) {
    console.log(this.convenience);
    return this.convenience.hasOwnProperty(convenience);
  }

  timeConversion(millisec) {
    const hours = (millisec / 3600000).toFixed(0);
    const minutes = ((millisec % 3600000) / 60000).toFixed(0);
    return hours + ' h ' + minutes + ' m';
  }

  selectConvenienceOf(i) {
    console.log(this.convenience);
    if (i === 0) {
      this.convenience = this.flight.convenienceAvailable;
    } else {
      this.convenience = this.flight.layOverDetails[i - 1].layOverConvenienceAvailable;
    }
    this.resetColor();
    this.setColor(i);
  }

  setColor(i) {
    this.flightInclusionMap.set(i, true);
  }

  colorRedOrNot(i) {
    return this.flightInclusionMap.get(i);
  }

  resetColor() {
    this.flightInclusionMap.forEach((value, key, map) => {
      map.set(key, false);
    });
  }
}
