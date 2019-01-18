import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAddressPage } from './edit-address';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAddressPage),
    ComponentsModule,
  ],
})
export class EditAddressPageModule {}
