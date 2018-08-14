import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  @Input() carriers;
  @Input() alliances;
  @Input() fareTypes;
  @Input() maxPrice;
  @Input() minPrice;
  @Input() noOfStops;
  @Input() carriersMap;
  @Input() alliancesMap;
  @Input() fareTypesMap;
  @Input() noOfStopsMap;
  @Input() carriersMapPrice;
  @Input() alliancesMapPrice;
  @Input() fareTypesMapPrice;
  @Input() noOfStopsMapPrice;
  lowerLimit: number;
  higherLimit: number;
  val = [50, 60];
  val1 = 30;
  showPrice = true;
  rangeValues: number[];
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

  layOverTimes: string[] = [
    '00-06', '06-12', '12-18', '18-24'
  ];

  filterArray = [];

  constructor() { }

  ngOnInit() {
    console.log(this.higherLimit);
    console.log(this.lowerLimit);
    this.filterArray = [
      {
        filterType: 'Fare Type',
        filterValues: this.fareTypes,
        filterMap: this.fareTypesMap,
        filterPriceMap: this.fareTypesMapPrice
      },
      {
        filterType: 'Airlines',
        filterValues: this.carriers,
        filterMap: this.carriersMap,
        filterPriceMap: this.carriersMapPrice
      },
      {
        filterType: 'refine by alliance',
        filterValues: this.alliances,
        filterMap: this.alliancesMap,
        filterPriceMap: this.alliancesMapPrice
      },
      {
        filterType: 'stops',
        filterValues: this.noOfStops,
        filterMap: this.noOfStopsMap,
        filterPriceMap: this.noOfStopsMapPrice
      },
      // {
      //   filterType: 'layover airports',
      //   filterValues: this.layovers,
      //   filterMap: this.layOversMap
      // },
      // {
      //   filterType: 'layover time (in hours)',
      //   filterValues: this.layOverTimes,
      //   filterMap:
      // }
    ];
    this.lowerLimit = this.minPrice;
    this.higherLimit = this.maxPrice;
    this.rangeValues = [this.lowerLimit, this.higherLimit];
  }

}
