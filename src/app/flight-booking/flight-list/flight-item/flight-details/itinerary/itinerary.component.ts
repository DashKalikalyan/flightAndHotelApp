import { Component, OnInit, Input } from '@angular/core';
import { Trip } from './trip.model';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  @Input() flight;

  trips: Trip[] = [];
  constructor() { }

  ngOnInit() {
    this.createTrips();
    console.log(this.trips);
  }

  timeConversion(millisec) {
    const hours = (millisec / 3600000).toFixed(0);
    const minutes = ((millisec % 3600000) / 60000).toFixed(0);
    return hours + ' h ' + minutes + ' m';
  }

  createTrips() {
    for (let i = 0; i <= this.flight.layOverDetails.length; i++) {
      this.trips.push(new Trip());
    }
    console.log(this.trips);
    this.trips[0].depart = {
      departFrom: this.flight.from,
      departFromCode: this.flight.fromCode,
      fromAirport: this.flight.departAirport,
      fromTerminal: this.flight.fromTerminal,
      departTime: this.flight.departureTime
    };
    this.trips[0].operator = {
      carrier: this.flight.carrier,
      name: this.flight.name,
      airCraft: this.flight.airCraft,
      class: this.flight.class,
      fareType: this.flight.fareType
    };
    for (let i = 0; i < this.flight.layOverDetails.length; i++ ) {
      this.trips[i].arrive = {
        arriveAt: this.flight.layOverDetails[i].via,
        arriveAtCode: this.flight.layOverDetails[i].viaCode,
        atAirport: this.flight.layOverDetails[i].viaAirport,
        atTerminal: this.flight.layOverDetails[i].arriveAtTerminal,
        arrivalTime: this.flight.layOverDetails[i].arrivesAtVia
      };

      if (i < this.flight.layOverDetails.length ) {
        this.trips[i + 1].depart = {
          departFrom: this.flight.layOverDetails[i].via,
          departFromCode: this.flight.layOverDetails[i].viaCode,
          fromAirport: this.flight.layOverDetails[i].viaAirport,
          fromTerminal: this.flight.layOverDetails[i].leavesAtTerminal,
          departTime: this.flight.layOverDetails[i].leavesVia
        };
        this.trips[i + 1].operator = {
          carrier: this.flight.carrier,
          name: this.flight.name,
          airCraft: this.flight.airCraft,
          class: this.flight.class,
          fareType: this.flight.fareType
        };
      }
    }

    this.trips[this.trips.length - 1].arrive = {
      arriveAt : this.flight.to,
      arriveAtCode: this.flight.toCode,
      atAirport: this.flight.arriveAirport,
      atTerminal: this.flight.toTerminal,
      arrivalTime: this.flight.arriveAt
    };
  }

}
