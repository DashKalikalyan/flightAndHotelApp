import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {EmitFilterValuesService} from '../emit-filter-values.service';

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
  @Input() classes;

  @Input() carriersMap;
  @Input() alliancesMap;
  @Input() fareTypesMap;
  @Input() noOfStopsMap;
  @Input() classesMap;

  @Input() carriersMapPrice;
  @Input() alliancesMapPrice;
  @Input() fareTypesMapPrice;
  @Input() noOfStopsMapPrice;
  @Input() classesMapPrice;

  lowerLimit: number;
  higherLimit: number;
  val = [50, 60];
  val1 = 30;
  showPrice = true;
  @Output() rangeValues: number[];
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

  constructor(private emitFilterValuesService: EmitFilterValuesService) {
  }

  ngOnInit() {
    this.filterArray = [
      {
        filterType: 'fareType',
        filterValues: this.fareTypes,
        filterMap: this.fareTypesMap,
        filterPriceMap: this.fareTypesMapPrice
      },
      {
        filterType: 'carrier',
        filterValues: this.carriers,
        filterMap: this.carriersMap,
        filterPriceMap: this.carriersMapPrice
      },
      {
        filterType: 'alliance',
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
      {
        filterType: 'class',
        filterValues: this.classes,
        filterMap: this.classesMap,
        filterPriceMap: this.classesMapPrice
      }
    ];
    this.lowerLimit = this.minPrice;
    this.higherLimit = this.maxPrice;
    this.rangeValues = [this.lowerLimit, this.higherLimit];
  }

  handlePriceChange() {
    this.emitFilterValuesService.emitSelectedfilterValues.next({filterType: 'price', selectedfilterValues: this.rangeValues});
  }

  onThis(parameter) {
    console.log(parameter);
  }

}

