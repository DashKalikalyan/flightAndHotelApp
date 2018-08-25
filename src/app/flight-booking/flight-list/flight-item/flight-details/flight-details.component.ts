import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();
  @Input() showFare;
  @Input() flight;
  @Input() flightInclusion;
  disabled = false;

  flightDetailsMap = new Map<string, boolean>();

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.flightDetailsMap.set('itinerary', false)
      .set('baggage', false)
      .set('fare-summery', false);
    if (this.showFare) {
      this.selectThis('fare-summery');
    } else {
      this.selectThis('itinerary');
    }
  }

  onCancel() {
    this.closeEmitter.emit();
  }

  isItSelected(type) {
    return this.flightDetailsMap.get(type);
  }

  selectThis(type) {
    this.reset();
    this.flightDetailsMap.set(type, true);
  }

  reset() {
    this.flightDetailsMap.forEach((value, key, map) => {
      map.set(key, false);
    });
  }

  reviewFlight() {
    console.log(this.flight);
    this.router.navigate(['flight-review', this.flight.id]);
  }

}
