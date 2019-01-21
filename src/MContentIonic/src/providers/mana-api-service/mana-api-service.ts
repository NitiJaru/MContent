import { Injectable } from '@angular/core';
import { Address } from '../api-service/api-service';
import { MerchantResponse } from '../merchant-model/merchant-model';

declare function TheSHybridCall(methodName: string, parameter: string): void;
declare function TheSHybridFunc(methodName: string, parameter: string, callback: any): void;

@Injectable()
export class ManaApiServiceProvider {

  constructor() {
    console.log('Hello ProfileManaServiceProvider Provider');
    (<any>window).manaSetProfileAddress = this.setDataCallback;
  }

  public static promResolve;

  getProfileAddress(): Promise<Address> {
    return new Promise<Address>((resolver, rejector) => {
      ManaApiServiceProvider.promResolve = resolver;
      TheSHybridFunc("getManaApi", "https://devmock.azurewebsites.net/api/Profile/Address", data => {
        alert('Got data in fn callback' + JSON.stringify(data));
        resolver(data);
      });
    });
  }

  saveProfileAddress(data) {
    TheSHybridCall("postManaApi", data);
  }

  setDataCallback(data) {
    alert('Got data in setDataCallback()' + JSON.stringify(data));
    ManaApiServiceProvider.promResolve(data);
  }

  getMemberships(): Promise<MerchantResponse[]> {
    return new Promise<MerchantResponse[]>((resolver, rejector) => {
      let serviceId = "svc_code";
      TheSHybridFunc("getMemberedShop", "http://api-mana-demo.azurewebsites.net/api/"+ serviceId + "/Membership/memberships", (data) => {
        alert('After call TheS Func');
        resolver(data);
      });
      alert('After call FN');
    });
  }
}
