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
    'arriveAt': 1543140000,
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
    'fareType': 'Non-refundable',
    'alliance': 'one world'
  },{
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
  maximumPrice: number;
  constructor() { }

  ngOnInit() {
    this.carriers = Array.from(new Set(this.flights.map((flight) => {
      return flight.carrier;
    })));
    this.maximumPrice = Math.max(...Array.from(new Set(this.flights.map((flight) => {
      return flight.price;
    }))));
    this.carriers.forEach((carrier) => {
      this.carriersMap.set(carrier, 0);
      this.carriersMapPrice.set(carrier, this.maximumPrice);
    });
    this.flights.forEach((flight) => {
      this.carriersMap.set(flight.carrier, this.carriersMap.get(flight.carrier) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.carriersMapPrice.get(flight.carrier)) {
        this.carriersMapPrice.set(flight.carrier, flight.price);
      }
    });
    console.log(this.carriersMap);



    this.alliances = Array.from(new Set(this.flights.map((flight) => {
      return flight.alliance;
    })));
    this.alliances.forEach((alliance) => {
      this.alliancesMap.set(alliance, 0);
      this.alliancesMapPrice.set(alliance, this.maximumPrice);
    });
    this.flights.forEach((flight) => {
      this.alliancesMap.set(flight.alliance, this.alliancesMap.get(flight.alliance) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.alliancesMapPrice.get(flight.alliance)) {
        this.alliancesMapPrice.set(flight.alliance, flight.price);
      }
    });
    console.log(this.alliancesMap);


    this.fareTypes = Array.from(new Set(this.flights.map((flight) => {
      return flight.fareType;
    })));
    this.fareTypes.forEach((fareType) => {
      this.fareTypesMap.set(fareType, 0);
      this.fareTypesMapPrice.set(fareType, this.maximumPrice);
    });
    this.flights.forEach((flight) => {
      this.fareTypesMap.set(flight.fareType, this.fareTypesMap.get(flight.fareType) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.fareTypesMapPrice.get(flight.fareType)) {
        this.fareTypesMapPrice.set(flight.fareType, flight.price);
      }
    });
    console.log(this.fareTypesMap);



    this.minPrice = Math.min(... this.flights.map((flight) => {
      return flight.price;
    }));
    this.maxPrice = Math.max(... this.flights.map((flight) => {
      return flight.price;
    }));

    this.noOfStops = Array.from(new Set(this.flights.map((flight) => {
      return flight.via.length;
    })));
    this.noOfStops.forEach((noOfStop) => {
      this.noOfStopsMap.set(noOfStop, 0);
      this.noOfStopsMapPrice.set(noOfStop, this.maximumPrice);
    });
    this.flights.forEach((flight) => {
      this.noOfStopsMap.set(flight.via.length, this.noOfStopsMap.get(flight.via.length) + 1);
    });
    this.flights.forEach((flight) => {
      if (flight.price < this.noOfStopsMapPrice.get(flight.via.length)) {
        this.noOfStopsMapPrice.set(flight.via.length, flight.price);
      }
    });



    console.log(this.carriersMap);
    console.log(this.carriersMapPrice);
    console.log(this.fareTypesMap);
    console.log(this.fareTypesMapPrice);
    console.log(this.alliancesMap);
    console.log(this.alliancesMapPrice);
    console.log(this.noOfStopsMap);
    console.log(this.noOfStopsMapPrice);
  }

}
