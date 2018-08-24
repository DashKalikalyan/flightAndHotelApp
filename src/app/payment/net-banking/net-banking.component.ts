import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent implements OnInit {
  selectedBankName;
  banks = [];
  constructor() { }

  ngOnInit() {
    this.banks.push({name: 'axis', imagePath: '../../../assets/axis.png'});
    this.banks.push({name: 'icici', imagePath: '../../../assets/icici.png'});
    this.banks.push({name: 'state_bank', imagePath: '../../../assets/state_bank.png'});
    this.banks.push({name: 'hdfc', imagePath: '../../../assets/hdfc.png'});
    this.banks.push({name: 'kotak', imagePath: '../../../assets/kotak.png'});
    this.banks.push({name: 'punjab_national', imagePath: '../../../assets/punjab_national.png'});
    this.selectedBankName = this.banks[0].name;
  }

}
