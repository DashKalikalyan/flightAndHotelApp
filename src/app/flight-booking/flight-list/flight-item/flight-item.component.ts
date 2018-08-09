import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {

  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
