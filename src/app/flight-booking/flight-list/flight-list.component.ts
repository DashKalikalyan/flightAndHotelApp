import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  @Input() filteredFlights;
  @Input() currentPage;
  @Input() perPage;
  @Input() pagesToShow;
  @Input() totalRecords;
  @Output() goNextEmit: EventEmitter<any> = new EventEmitter();
  @Output() goPrevEmit: EventEmitter<any> = new EventEmitter();
  @Output() goToPageEmit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  goNext() {
    this.goNextEmit.emit();
  }

  goPrev() {
    this.goPrevEmit.emit();
  }

  goToPage(pageNumber) {
    console.log(pageNumber);
    this.goToPageEmit.emit(pageNumber);
  }

}
