import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.css']
})
export class FilterCheckboxComponent implements OnInit {
  show = true;
  last = 8;
  @Input() filterValues;
  @Input() filterType;
  @Input() filterMap;
  @Input() filterPriceMap;
  selectedfilterValues = [];
  constructor() { }

  ngOnInit() {
    console.log(this.filterValues);
  }

  showMore() {
    this.last = this.filterValues.length;
  }

  showLess() {
    this.last = 8;
  }

}
