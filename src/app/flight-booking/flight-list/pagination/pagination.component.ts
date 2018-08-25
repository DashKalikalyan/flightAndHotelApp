import {Component, EventEmitter, OnInit, Output, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Output() goNextEmit: EventEmitter<any> = new EventEmitter();
  @Output() goPrevEmit: EventEmitter<any> = new EventEmitter();
  @Output() goToPageEmit: EventEmitter<any> = new EventEmitter();
  @Input() currentPage;
  @Input() totalRecords;
  @Input() perPage;
  @Input() pagesToShow;
  noOfPages;

  elements = [];

  constructor() {
  }

  ngOnInit() {
    this.setPagination();
  }

  ngOnChanges() {
    this.setPagination();
  }

  goNext() {
    ++this.currentPage;
    this.goNextEmit.emit();
  }

  goPrev() {
    --this.currentPage;
    this.goPrevEmit.emit();
  }

  goToPage(pageNumber) {
    this.currentPage = pageNumber;
    this.goToPageEmit.emit(pageNumber);
  }

  isThisTheActivePage(el) {
    return this.currentPage === el;
  }

  isFirstPage() {
    return this.currentPage === 1;
  }

  isLastPage() {
    return this.currentPage === this.noOfPages;
  }

  setPagination() {
    this.elements = [];
    let i, loop;
    if (this.totalRecords % this.perPage === 0) {
      this.noOfPages = this.totalRecords / this.perPage;
    } else {
      this.noOfPages = Math.ceil(this.totalRecords / this.perPage);
    }
    loop = this.noOfPages;
    for (i = 1; i <= loop; i++) {
      this.elements.push(i);
    }
  }
}
