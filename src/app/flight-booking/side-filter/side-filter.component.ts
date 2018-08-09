import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  showAirlines = true;
  showFareTypes = true;
  selectedAirlines: string[] = [];
  selectedFareType: string[] = [];
  fareTypes: string[] = [
    'partially refundable',
    'non refundable'
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
  constructor() { }

  ngOnInit() {
  }

}
