import { Component, OnInit } from '@angular/core';
import {FlightBookingService} from './flight-booking.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  flights = [];
  carriers = [];
  alliances = [];
  fareTypes = [];
  layOvers = [];
  minPrice: number;
  maxPrice: number;
  noOfStops: number[];
  carriersMap = new Map<string, number>();
  carriersMapPrice = new Map<string, number>();
  alliancesMap = new Map<string, number>();
  alliancesMapPrice = new Map<string, number>();
  fareTypesMap = new Map<string, number>();
  fareTypesMapPrice = new Map<string, number>();
  noOfStopsMap = new Map<number, number>();
  noOfStopsMapPrice = new Map<number, number>();
  layOversMap = new Map<string, number>();
  layOversMapPrice = new Map<number, number>();
  vias = [];
  filterObject = {};
  filteredFlights = [];
  filteredFlightsPerPage = [];
  currentPage = 1;
  perPage = 2;
  pagesToShow = 2;
  filterBy = [];
  constructor(private flightBookingService: FlightBookingService) { }

  ngOnInit() {
    this.flights = this.flightBookingService.getFlights();
    this.filteredFlights = this.flights;
    this.sortFlights();
    this.setCurrentPage();
    this.minPrice = Math.min(... this.flights.map((flight) => {
      return flight.price;
    }));
    this.maxPrice = Math.max(... this.flights.map((flight) => {
      return flight.price;
    }));

    this.getAllCarriersAndMinimumPriceOfEach();
    this.getAllAlliancesAndMinimumPriceOfEach();
    this.getAllFaretypesAndMinimumPriceOfEach();
    this.getAllNoOfStopsAndMinimumPriceOfEach();
  }

  getAllCarriersAndMinimumPriceOfEach() {
    this.carriers = Array.from(new Set(this.flights.map((flight) => {
      return flight.carrier;
    })));
    this.carriers.forEach((carrier) => {
      this.carriersMap.set(carrier, 0);
      this.carriersMapPrice.set(carrier, this.maxPrice);
    });
    this.flights.forEach((flight) => {
      this.carriersMap.set(flight.carrier, this.carriersMap.get(flight.carrier) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.carriersMapPrice.get(flight.carrier)) {
        this.carriersMapPrice.set(flight.carrier, flight.price);
      }
    });
  }

  getAllAlliancesAndMinimumPriceOfEach() {
    this.alliances = Array.from(new Set(this.flights.map((flight) => {
      return flight.alliance;
    })));
    this.alliances.forEach((alliance) => {
      this.alliancesMap.set(alliance, 0);
      this.alliancesMapPrice.set(alliance, this.maxPrice);
    });
    this.flights.forEach((flight) => {
      this.alliancesMap.set(flight.alliance, this.alliancesMap.get(flight.alliance) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.alliancesMapPrice.get(flight.alliance)) {
        this.alliancesMapPrice.set(flight.alliance, flight.price);
      }
    });
  }

  getAllFaretypesAndMinimumPriceOfEach() {
    this.fareTypes = Array.from(new Set(this.flights.map((flight) => {
      return flight.fareType;
    })));
    this.fareTypes.forEach((fareType) => {
      this.fareTypesMap.set(fareType, 0);
      this.fareTypesMapPrice.set(fareType, this.maxPrice);
    });
    this.flights.forEach((flight) => {
      this.fareTypesMap.set(flight.fareType, this.fareTypesMap.get(flight.fareType) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.fareTypesMapPrice.get(flight.fareType)) {
        this.fareTypesMapPrice.set(flight.fareType, flight.price);
      }
    });
  }

  getAllNoOfStopsAndMinimumPriceOfEach() {
    this.noOfStops = Array.from(new Set(this.flights.map((flight) => {
      return flight.layOverDetails.length;
    })));
    this.noOfStops.forEach((noOfStop) => {
      this.noOfStopsMap.set(noOfStop, 0);
      this.noOfStopsMapPrice.set(noOfStop, this.maxPrice);
    });
    this.flights.forEach((flight) => {
      this.noOfStopsMap.set(flight.layOverDetails.length, this.noOfStopsMap.get(flight.layOverDetails.length) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.noOfStopsMapPrice.get(flight.layOverDetails.length)) {
        this.noOfStopsMapPrice.set(flight.layOverDetails.length, flight.price);
      }
    });
  }

  filter(selectedfilterValues) {
    console.log(selectedfilterValues);
    this.filterObject[selectedfilterValues.filterType] = selectedfilterValues.selectedfilterValues;
    console.log(this.filterObject);
    this.filterByFilterObject();
  }

  filterByFilterObject() {
      this.filteredFlights = this.flights.filter((flight) => {
        if (this.filterObject['carrier']
          && this.filterObject['carrier'].length > 0
          && (! this.filterObject['carrier'].includes(flight.carrier))) {
          return;
        }
        if (this.filterObject['fareType']
          && this.filterObject['fareType'].length > 0
          && (! this.filterObject['fareType'].includes(flight.fareType))) {
          return;
        }
        if (this.filterObject['alliance']
          && this.filterObject['alliance'].length > 0
          && (! this.filterObject['alliance'].includes(flight.alliance))) {
          return;
        }
        if (this.filterObject['stops']
          && this.filterObject['stops'].length > 0
          && (! this.filterObject['stops'].includes(flight.layOverDetails.length))) {
          return;
        }
        if (this.filterObject['price']
          && this.filterObject['price'].length > 0
          && ( flight.price < this.filterObject['price'][0] || flight.price > this.filterObject['price'][1])) {
          return;
        }
        return flight;
      });
      this.currentPage = 1;
      this.setCurrentPage();
      console.log(this.filteredFlights.length);
  }

  sortFlights() {
    this.filteredFlights.sort((first, second) => {
      return first.price - second.price;
    });
  }

  goPrev() {
    --this.currentPage;
    this.setCurrentPage();
  }

  goNext() {
    ++this.currentPage;
    this.setCurrentPage();
  }

  goToPage(n) {
    if (n === '...') {
      ++ this.currentPage;
      this.setCurrentPage();
    } else {
      this.currentPage = n;
      this.setCurrentPage();
      console.log(n);
    }
  }

  setCurrentPage() {
    this.filteredFlightsPerPage = this.filteredFlights.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
  }
}
