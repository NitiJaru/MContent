import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembershipShopSelectPage } from './membership-shop-select';

@NgModule({
  declarations: [
    MembershipShopSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(MembershipShopSelectPage),
  ],
})
export class MembershipShopSelectPageModule {}
