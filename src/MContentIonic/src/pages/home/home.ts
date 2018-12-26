import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private pageList:any = [];
  constructor(public navCtrl: NavController) {

    // Comment:
    // Add new page to below list, It will automatic generate item and navigate to page.
    // If you want to invisible home page, must comment or remove below list.
    this.pageList = 
    [
      { Name: "Express checkout", PageName: "ExpressCheckoutPage"},
      { Name: "Eslip shop select", PageName: "EslipShopSelectPage"},
      { Name: "Eslip select", PageName: "EslipSelectPage"},
      { Name: "Eslip use", PageName: "EslipUsePage"},
      { Name: "Eslip wait approve", PageName: "EslipWaitApprovePage"},
      { Name: "Eslip approved", PageName: "EslipApprovedPage"},
      { Name: "Eslip receive detail", PageName: "EslipReceiveDetailPage"},
    ];
  }

  Navigate2Page(PageName: string){
    this.navCtrl.push(PageName);
  }
}
