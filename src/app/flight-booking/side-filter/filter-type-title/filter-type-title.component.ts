import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-type-title',
  templateUrl: './filter-type-title.component.html',
  styleUrls: ['./filter-type-title.component.css']
})
export class FilterTypeTitleComponent implements OnInit {
  @Input() filterType;
  @Input() selectedfilterValues;
  @Input() show;
  @Output() showOrNot = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitShow() {
    this.showOrNot.emit(this.show);
  }

}
