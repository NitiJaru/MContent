import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MerchantResponse } from '../merchant-model/merchant-model';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  constructor(private http: HttpClient) {
  }

  getProfileAddress(): Promise<Address> {
    var result = this.http.get<Address>("https://devmock.azurewebsites.net/api/Profile/earn").toPromise();
    result.then((v) => { console.log(v) });
    return result;
  }

  saveProfileAddress(data: Address): void {
    this.http.post("https://devmock.azurewebsites.net/api/Profile/earn", data).subscribe();
  }

  getMembershipList(): Promise<MerchantResponse[]> {
    return this.http.get<MerchantResponse[]>("https://devmock.azurewebsites.net/api/Membership/merchant").toPromise<MerchantResponse[]>();
  }
}

export class Address {
  streetAddress: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
}
