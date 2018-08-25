import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmitFilterValuesService} from '../../emit-filter-values.service';

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

  constructor(private emitFilterValuesService: EmitFilterValuesService) {
  }

  ngOnInit() {
    this.emitFilterValuesService.emitSelectedfilterValues.subscribe((updatedFilterValues) => {
      this.selectedfilterValues = updatedFilterValues.selectedfilterValues;
      console.log(this.selectedfilterValues);
    });
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
    this.emitFilterValuesService.emitSelectedfilterValues.next({
      filterType: this.filterType,
      selectedfilterValues: this.selectedfilterValues
    });
  }

}
