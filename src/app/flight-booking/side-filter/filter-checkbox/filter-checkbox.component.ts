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
  @Output() emitSelectedValues: EventEmitter<any> = new EventEmitter();

  constructor(private emitFilterValuesService: EmitFilterValuesService) {
  }

  ngOnInit() {
    this.emitFilterValuesService.emitSelectedfilterValues.subscribe((updatedFilterValues) => {
      if (updatedFilterValues.filterType === this.filterType) {
        this.selectedfilterValues = updatedFilterValues.selectedfilterValues;
      }
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
    console.log ({
      filterType: this.filterType,
      selectedfilterValues: this.selectedfilterValues
    });
    // this.emitSelectedValues.emit({
    //   filterType: this.filterType,
    //   selectedfilterValues: this.selectedfilterValues
    // });
    this.emitFilterValuesService.emitSelectedfilterValues.next({
      filterType: this.filterType,
      selectedfilterValues: this.selectedfilterValues
    });
  }
}
