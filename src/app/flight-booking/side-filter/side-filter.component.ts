import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  val = [50, 60];
  val1 = 30;
  rangeValues: number[] = [20241, 40342];
  fareTypes: string[] = [
    'partially refundable',
    'non refundable'
  ];

  alliance: string[] = [
    'one world',
    'star',
    'sky'
  ];

  airlines: string[] = [
    'Air China',
    'Air Canada',
    'Air France',
    'Air India',
    'All Nippon Airways',
    'American',
    'Asiana Airlines',
    'Austrian Airlines',
    'British Airways',
    'Cathay Pacific',
    'China Southern Airlines',
    'China Eastern',
    'Delta Air Lines',
    'Emirates',
    'Etihad Airways',
    'Fiji Airways',
    'Finnair',
    'Hong Kong Airlines',
    'Jet Airways',
    'KLM Royal Dutch Airlines',
    'Korean Air',
    'Malaysia Airlines',
    'Multiple Airline',
    'Qatar Airways',
    'Singapore Airlines',
    'Swiss',
    'Turkish Airlines',
    'United Airlines'
  ];

  layovers: string[] = [
    'Shanghai - Pudong (PVG)',
    'Singapore (SIN)',
    'London (LHR)',
    'Helsinki (HEL)',
    'Tokyo (NRT)',
    'Kuala Lumpur (KUL)',
    'Hong Kong (HKG)',
    'Seoul (ICN)',
    'Dubai (DXB)',
    'Los Angeles (LAX)',
    'Seattle (SEA)',
    'Abu Dhabi (AUH)',
    'New York (JFK)',
    'Bangalore (BLR)',
    'Istanbul (IST)',
    'Beijing (PEK)',
    'Boston (BOS)',
    'Doha (DOH)',
    'Bangkok (BKK)',
    'Rome (FCO)',
    'Munich (MUC)',
    'Frankfurt (FRA)',
    'Toronto (YYZ)',
    'Amsterdam (AMS)',
    'Dublin (DUB)',
    'Miami (MIA)',
    'Chicago (ORD)',
    'Dallas/Fort Worth (DFW)',
    'Philadelphia (PHL)',
    'Zurich (ZRH)',
    'Paris (CDG)',
    'Guangzhou (CAN)',
    'Mumbai (BOM)',
    'Newark (EWR)',
    'Osaka (KIX)'
  ];

  stops: string[] = [
    '0', '1', '2'
  ];

  layOverTimes: string[] = [
    '00-06', '06-12', '12-18', '18-24'
  ];
  filterArray = [
    {
      filterType: 'Fare Type',
      filterValues: this.fareTypes
    },
    {
      filterType: 'Airlines',
      filterValues: this.airlines
    },
    {
      filterType: 'refine by alliance',
      filterValues: this.alliance
    },
    {
      filterType: 'layover airports',
      filterValues: this.layovers
    },
    {
      filterType: 'stops',
      filterValues: this.stops
    },
    {
      filterType: 'layover time (in hours)',
      filterValues: this.layOverTimes
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
