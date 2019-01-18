import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchantResponse, Merchant } from '../../providers/merchant-model/merchant-model';
import { ManaApiServiceProvider } from '../../providers/mana-api-service/mana-api-service';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@IonicPage()
@Component({
  selector: 'page-membership-shop-select',
  templateUrl: 'membership-shop-select.html',
})
export class MembershipShopSelectPage {
  list: MerchantResponse[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public svc: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    this.svc.getMembershipList().then((data) => {
      this.list = data;
    })
  }
}
