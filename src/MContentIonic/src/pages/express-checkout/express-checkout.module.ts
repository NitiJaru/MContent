import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpressCheckoutPage } from './express-checkout';

@NgModule({
  declarations: [
    ExpressCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpressCheckoutPage),
  ],
})
export class ExpressCheckoutPageModule {}
