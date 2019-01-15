import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  constructor(private http: HttpClient) {
  }

  getProfileAddress(): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.http.get<Address>("https://devmock.azurewebsites.net/api/Profile/earn").subscribe(data => {
        resolve(data);
      });
    });
  }

  saveProfileAddress(data: Address): void {
    this.http.post("https://devmock.azurewebsites.net/api/Profile/earn", data);
  }

}

export class Address {
  streetAddress: string;
  district: string;
  city: string;
  province: string;
  postalCode: string;
}
