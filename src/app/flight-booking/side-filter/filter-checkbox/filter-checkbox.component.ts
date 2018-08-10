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
  selectedfilterValues = [];
  constructor() { }

  ngOnInit() {
  }

  showMore() {
    this.last = this.filterValues.length;
  }

  showLess() {
    this.last = 8;
  }

}
