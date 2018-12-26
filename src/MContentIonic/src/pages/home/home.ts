import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private pageList:any = [];
  constructor(public navCtrl: NavController) {
    this.pageList = 
    [
      { Name: "Express checkout", PageName: "ExpressCheckoutPage"},
      { Name: "Eslip shop select", PageName: "EslipShopSelectPage"},
    ];
  }

  Navigate2Page(PageName: string){
    this.navCtrl.push(PageName);
  }
}
