import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit() {
  }

  getPortSize() {
    console.log(window.innerWidth * 1000 / 1440 + 'px');
    return window.innerWidth * 1000 / 1440 + 'px';
  }

}
