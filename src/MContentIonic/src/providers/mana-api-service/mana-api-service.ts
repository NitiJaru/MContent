import { Injectable } from '@angular/core';
import { Address } from '../api-service/api-service';

declare var TheSHybridCall;
declare var TheSHybridFunc;

@Injectable()
export class ManaApiServiceProvider {

  constructor() {
  }

  async getProfileAddress(): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      TheSHybridFunc("getManaApi", "https://devmock.azurewebsites.net/api/Profile/earn", data => {
        resolve(data);
      });
    });
  }

  saveProfileAddress(data) {
    TheSHybridCall("postManaApi", data);
  }

}


