import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fare-details',
  templateUrl: './fare-details.component.html',
  styleUrls: ['./fare-details.component.css']
})
export class FareDetailsComponent implements OnInit {
  showBaseExtra = false;
  feeSurchargeExtra = false;

  constructor() {
  }

  ngOnInit() {
  }

}
