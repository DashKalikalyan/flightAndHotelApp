import {Injectable} from '@angular/core';
import {Trip} from './trip.model';

@Injectable({
  providedIn: 'root'
})
export class CreateTripService {

  constructor() {
  }

  createTrips(flight) {
    const trips: Trip[] = [];
    for (let i = 0; i <= flight.layOverDetails.length; i++) {
      trips.push(new Trip());
    }
    console.log(trips);
    trips[0].depart = {
      departFrom: flight.from,
      departFromCode: flight.fromCode,
      fromAirport: flight.departAirport,
      fromTerminal: flight.fromTerminal,
      departTime: flight.departureTime
    };
    trips[0].operator = {
      carrier: flight.carrier,
      name: flight.name,
      airCraft: flight.airCraft,
      class: flight.class,
      fareType: flight.fareType
    };
    for (let i = 0; i < flight.layOverDetails.length; i++) {
      trips[i].arrive = {
        arriveAt: flight.layOverDetails[i].via,
        arriveAtCode: flight.layOverDetails[i].viaCode,
        atAirport: flight.layOverDetails[i].viaAirport,
        atTerminal: flight.layOverDetails[i].arriveAtTerminal,
        arrivalTime: flight.layOverDetails[i].arrivesAtVia
      };

      if (i < flight.layOverDetails.length) {
        trips[i + 1].depart = {
          departFrom: flight.layOverDetails[i].via,
          departFromCode: flight.layOverDetails[i].viaCode,
          fromAirport: flight.layOverDetails[i].viaAirport,
          fromTerminal: flight.layOverDetails[i].leavesAtTerminal,
          departTime: flight.layOverDetails[i].leavesVia
        };
        trips[i + 1].operator = {
          carrier: flight.carrier,
          name: flight.name,
          airCraft: flight.airCraft,
          class: flight.class,
          fareType: flight.fareType
        };
      }
    }

    trips[trips.length - 1].arrive = {
      arriveAt: flight.to,
      arriveAtCode: flight.toCode,
      atAirport: flight.arriveAirport,
      atTerminal: flight.toTerminal,
      arrivalTime: flight.arriveAt
    };
    return trips;
  }
}
