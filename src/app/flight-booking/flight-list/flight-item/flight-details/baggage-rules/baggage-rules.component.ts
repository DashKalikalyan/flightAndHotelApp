import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baggage-rules',
  templateUrl: './baggage-rules.component.html',
  styleUrls: ['./baggage-rules.component.css']
})
export class BaggageRulesComponent implements OnInit {
  @Input() flight;
  @Input() flightInclusion;
  constructor() { }

  ngOnInit() {
  }

}
