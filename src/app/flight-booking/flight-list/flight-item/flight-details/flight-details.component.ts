import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.closeEmitter.emit();
  }

}
