import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
})
export class EditAddressPage {

  // private addressInfo: Address = {
  //   StreetAddress: "",
  //   District: "",
  //   City: "",
  //   Province: "",
  //   PostalCode: "",
  // };
  private addressInfo: Address= new Address();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

export class Address {
  StreetAddress: string;
  District: string;
  City: string;
  Province: string;
  PostalCode: string;
  constructor() { }
}
