import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider, Address } from '../../providers/api-service/api-service';
import { ManaApiServiceProvider } from '../../providers/mana-api-service/mana-api-service';

@IonicPage()
@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
})
export class EditAddressPage {

  addressInfo: Address = new Address();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private old_svc: ApiServiceProvider,
    private svc: ManaApiServiceProvider) {
    this.getAddress();
  }

  async getAddress() {
    await this.svc.getProfileAddress().then(res => {
      console.log(res);
      this.addressInfo = res;
      console.log(this.addressInfo);
    });
  }

  saveAddress() {
    this.svc.saveProfileAddress(this.addressInfo);
  }
}

