import {Component, Input, OnInit} from '@angular/core';
import {EmitFilterValuesService} from '../emit-filter-values.service';

@Component({
  selector: 'app-minimum-price-in-airline',
  templateUrl: './minimum-price-in-airline.component.html',
  styleUrls: ['./minimum-price-in-airline.component.css']
})
export class MinimumPriceInAirlineComponent implements OnInit {
  i = 0;
  @Input() carriers;
  @Input() carriersMap;
  @Input() carriersMapPrice;
  selectedCarrier = [];
  flightsCarriersMap = new Map<string, boolean>();

  constructor(private emitFilterValuesService: EmitFilterValuesService) {
  }

  ngOnInit() {
    this.emitFilterValuesService.emitSelectedfilterValues.subscribe((updatedValues) => {
      this.reset();
      if (updatedValues.selectedfilterValues.length === 1) {
        this.selectedCarrier[0] = updatedValues.selectedfilterValues[0];
        this.flightsCarriersMap.set(this.selectedCarrier[0], true);
      }
      if (updatedValues.selectedfilterValues.length === 0) {
        this.selectedCarrier = [];
      }
    });
    this.carriers.forEach((carrier) => {
      this.flightsCarriersMap.set(carrier, false);
    });
  }

  shortenedCarrierName(carrier) {
    if (carrier.length > 12) {
      return carrier.substr(0, 9) + '...';
    } else {
      return carrier;
    }
  }

  goPrev() {
    this.i = this.i - 1;
  }

  goNext() {
    this.i = this.i + 1;
  }

  selectFlightsOfThisAirline(carrier) {
    this.selectedCarrier = [];
    this.selectedCarrier.push(carrier);
    this.reset();
    this.flightsCarriersMap.set(carrier, true);
    this.emitFilterValuesService.emitSelectedfilterValues.next({filterType: 'carrier', selectedfilterValues: this.selectedCarrier});
  }

  showAll() {
    this.selectedCarrier = [];
    this.reset();
    this.emitFilterValuesService.emitSelectedfilterValues.next({filterType: 'carrier', selectedfilterValues: this.selectedCarrier});
  }

  reset() {
    this.flightsCarriersMap.forEach((value, key, map) => {
      map.set(key, false);
    });
  }
}
