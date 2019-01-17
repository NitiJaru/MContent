import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchantResponse, Merchant } from '../../providers/merchant-model/merchant-model';

@IonicPage()
@Component({
  selector: 'page-membership-shop-select',
  templateUrl: 'membership-shop-select.html',
})
export class MembershipShopSelectPage {
  list: MerchantResponse[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.list = [
      {
        merchant: {
          _id: "1",
          logo: "assets/imgs/logo.png",
          name: "Promome"
        },
        memberCount: 2546
      },
      {
        merchant: {
          _id: "2",
          logo: "assets/imgs/logo.png",
          name: "P2P Loan"
        },
        memberCount: 1345
      },
    ];
  }
}
