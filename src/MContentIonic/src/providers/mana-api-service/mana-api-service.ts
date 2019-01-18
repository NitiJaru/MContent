import { Injectable } from '@angular/core';
import { Address } from '../api-service/api-service';
import { MerchantResponse } from '../merchant-model/merchant-model';

declare var TheSHybridCall;
declare var TheSHybridFunc;

@Injectable()
export class ManaApiServiceProvider {

  constructor() {
    (<any>window).manaSetProfileAddress = this.setDataCallback;
  }

  public AddressPromise;

  getProfileAddress(): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.AddressPromise = resolve;
      TheSHybridFunc("getManaApi", "https://devmock.azurewebsites.net/api/Profile/earn", data => {
        alert('Got data in fn callback' + JSON.stringify(data));
        resolve(data);
      });
    });
  }

  saveProfileAddress(data) {
    TheSHybridCall("postManaApi", data);
  }

  setDataCallback(data) {
    alert('Got data in setDataCallback()' + JSON.stringify(data));
    this.AddressPromise(data);
  }

  getMembershipList(): Promise<MerchantResponse[]> {
    return new Promise<MerchantResponse[]>((resolve, reject) => {
      let data = [
        {
          merchant: {
            _id: "1",
            logo: "assets/imgs/logo.png",
            name: "Promome"
          },
          memberCount: 2546
        },
        {
          merchant: {
            _id: "2",
            logo: "assets/imgs/logo.png",
            name: "P2P Loan"
          },
          memberCount: 1345
        },
      ];
      resolve(data);
    });
  }
}
