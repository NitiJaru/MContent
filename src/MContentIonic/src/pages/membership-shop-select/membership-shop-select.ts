import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchantResponse } from '../../providers/merchant-model/merchant-model';
import { ManaApiServiceProvider } from '../../providers/mana-api-service/mana-api-service';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@IonicPage()
@Component({
  selector: 'page-membership-shop-select',
  templateUrl: 'membership-shop-select.html',
})
export class MembershipShopSelectPage {
  list: MerchantResponse[] = [];
  public merchant;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public svc: ManaApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MContentFormPage');
    this.merchant = this.svc.getMemberships();
  }

  // async ngOnInit() {
  //   await this.getMemberships();
  // }

  // async getMemberships() {
  //   await this.svc.getMemberships().then((data) => {
  //     this.list = data;
  //   }, (error) => {
  //     alert(error);
  //   });
  // }
}
