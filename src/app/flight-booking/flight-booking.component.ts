import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  flights = [{
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1593140000,
    'via': [ 'london'],
    'viaCode': ['CDG'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 500,
    'carrier': 'Air India',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'sky'
  }, {
    'from': 'Seattle',
    'fromCode': 'SEA',
    'to': 'Mumbai',
    'toCode': 'BOM',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'london'],
    'viaCode': ['CDG'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 510,
    'carrier': 'Air China',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'sky'
  }, {
    'from': 'New York',
    'fromCode': 'JFK',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'london'],
    'viaCode': ['LHR'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 520,
    'carrier': 'Air Canada',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'one world'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'paris'],
    'viaCode': ['CDG'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 531,
    'carrier': 'Air France',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'star'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'frankfurt'],
    'viaCode': ['FRA'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 570,
    'carrier': 'Swiss',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'sky'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'istanbul'],
    'viaCode': ['IST'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 530,
    'carrier': 'Turkish Airlines',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'one world'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'amsterdam'],
    'viaCode': ['AMS'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 563,
    'carrier': 'British Airways',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'one world'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': ['rome'],
    'viaCode': ['FCO'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 579,
    'carrier': 'Emirates',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'sky'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'london'],
    'viaCode': ['LHR'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 621,
    'carrier': 'American',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'star'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'barcelona'],
    'viaCode': ['BCN'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 500,
    'carrier': 'Air India',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'one world'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'london', 'paris'],
    'viaCode': ['LHR', 'CDG'],
    'arrivesAtVia': [1543147200, 1543147200],
    'leavesVia': [1543148800, 1543147200],
    'price': 500,
    'carrier': 'Air India',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'Non-refundable',
    'alliance': 'one world'
  }, {
    'from': 'San Francisco',
    'fromCode': 'SFO',
    'to': 'New Delhi',
    'toCode': 'DEL',
    'departureTime': 1540461600,
    'arriveAt': 1543140000,
    'via': [ 'london'],
    'viaCode': ['LHR'],
    'arrivesAtVia': [1543147200],
    'leavesVia': [1543148800],
    'price': 500,
    'carrier': 'Air India',
    'convenienceAvailable': {'internet': '25Mbps',
      'aircraft': 'Airbus A325',
      'meal': 'free',
      'entertainment': 'english, hindi, italian'},
    'aircraft': 'A325',
    'fareType': 'partially-refundable',
    'alliance': 'star'
  }];
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
  filterBy = [];
  constructor() { }

  ngOnInit() {
    this.filteredFlights = this.flights;

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








    // this.flights.forEach((flight) => {
    //   flight.via.forEach((layOver) => {
    //     this.vias.push(layOver);
    //   });
    // });
    //
    // this.layOvers = Array.from(new Set(this.vias));
    //
    // this.layOvers.forEach((layOver) => {
    //   this.layOversMap.set(layOver, 0);
    //   this.layOversMapPrice.set(layOver, this.maxPrice);
    // });
    //
    // this.vias.forEach((via) => {
    //   this.layOversMap.set(via, this.layOversMap.get(via) + 1);
    // });

    // this.flights.forEach((flight) => {
    //   if (flight.price < this.noOfStopsMapPrice.get(flight.via.length)) {
    //     this.noOfStopsMapPrice.set(flight.via.length, flight.price);
    //   }
    // });


    // this.alliances.forEach((alliance) => {
    //   this.alliancesMap.set(alliance, 0);
    //   this.alliancesMapPrice.set(alliance, this.maxPrice);
    // });
    // this.flights.forEach((flight) => {
    //   this.alliancesMap.set(flight.alliance, this.alliancesMap.get(flight.alliance) + 1);
    // });
    // this.flights.forEach((flight) => {
    //   if (flight.price < this.alliancesMapPrice.get(flight.alliance)) {
    //     this.alliancesMapPrice.set(flight.alliance, flight.price);
    //   }
    // });
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
      return flight.via.length;
    })));
    this.noOfStops.forEach((noOfStop) => {
      this.noOfStopsMap.set(noOfStop, 0);
      this.noOfStopsMapPrice.set(noOfStop, this.maxPrice);
    });
    this.flights.forEach((flight) => {
      this.noOfStopsMap.set(flight.via.length, this.noOfStopsMap.get(flight.via.length) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.noOfStopsMapPrice.get(flight.via.length)) {
        this.noOfStopsMapPrice.set(flight.via.length, flight.price);
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
          && (! this.filterObject['stops'].includes(flight.via.length))) {
          return;
        }
        return flight;
      });
  }
}
