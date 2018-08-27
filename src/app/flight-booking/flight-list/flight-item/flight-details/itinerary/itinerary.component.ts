import {Component, OnInit, Input} from '@angular/core';
import {Trip} from './trip.model';
import {CreateTripService} from './create-trip.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  @Input() flight;

  trips: Trip[] = [];

  constructor(private createTripService: CreateTripService) {
  }

  ngOnInit() {
    this.trips = this.createTripService.createTrips(this.flight);
    console.log(this.trips);
  }

  timeConversion(millisec) {
    const hours = Math.floor(millisec / 3600000);
    const minutes = ((millisec % 3600000) / 60000).toFixed(0);
    return hours + ' h ' + minutes + ' m';
  }
}
