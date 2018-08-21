import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  flightDetailsMap = new Map<string, boolean>();
  constructor() { }

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

}
