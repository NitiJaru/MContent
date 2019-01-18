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

  address: Promise<Address>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private old_svc: ApiServiceProvider,
    private svc: ManaApiServiceProvider) {
  }

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this.address = this.svc.getProfileAddress();
  }
}

