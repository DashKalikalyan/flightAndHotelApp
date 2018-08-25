import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-wallet',
  templateUrl: './mobile-wallet.component.html',
  styleUrls: ['./mobile-wallet.component.css']
})
export class MobileWalletComponent implements OnInit {
  wallets = [];
  selectedWalletName;

  constructor() {
  }

  ngOnInit() {
    this.wallets.push({name: 'freecharge', imagePath: '../../../assets/freecharge.png'});
    this.wallets.push({name: 'jio_money', imagePath: '../../../assets/jio_money.png'});
    this.wallets.push({name: 'mobikwik', imagePath: '../../../assets/mobikwik.png'});
    this.wallets.push({name: 'payzapp', imagePath: '../../../assets/payzapp.png'});
    this.wallets.push({name: 'airtel_money', imagePath: '../../../assets/airtel_money.png'});
    this.selectedWalletName = this.wallets[0].name;
  }

}
