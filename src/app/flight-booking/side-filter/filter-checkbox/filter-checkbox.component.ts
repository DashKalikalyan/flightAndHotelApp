import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output() emitSelectedfilterValues: EventEmitter<any> = new EventEmitter();
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

  filterByThisOnly(filterValue) {
    this.selectedfilterValues = [];
    this.selectedfilterValues.push(filterValue);
    this.filter();
  }

  filter() {
    this.emitSelectedfilterValues.emit({filterType: this.filterType, selectedfilterValues: this.selectedfilterValues});
  }

}
