import { Injectable } from '@angular/core';
import { Address } from '../api-service/api-service';

declare var TheSHybridCall;
declare var TheSHybridFunc;

@Injectable()
export class ManaApiServiceProvider {

  constructor() {
  }

  public static AddressPromise;

  async getProfileAddress(): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      ManaApiServiceProvider.AddressPromise = resolve;
      TheSHybridFunc("getManaApi", "https://devmock.azurewebsites.net/api/Profile/earn", data => {
        resolve(data);
      });
    });
  }

  saveProfileAddress(data) {
    TheSHybridCall("postManaApi", data);
  }

}

export function manaSetProfileAddress(data) {
  ManaApiServiceProvider.AddressPromise(data);
}

