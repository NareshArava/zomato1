import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  userKey : string = "774ab5a206343ee0c5a52f3c7cfe9a2b";

  constructor(private _http: HttpClient) {}

    getSearch(name: string, lat: string, long: string){

      const headers = new HttpHeaders({
        "accept" : "application/json",
        "user-key" : this.userKey
      })

      return this._http.get(`https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${long}&radius=1000`, {headers});
    }

    getCities(name: string){

      const headers = new HttpHeaders({
        "accept" : "application/json",
        "user-key" : this.userKey
      })

      return this._http.get(`https://developers.zomato.com/api/v2.1/cities?q=${name}`, {headers});
    }
    getLocation(name: string){

      const headers = new HttpHeaders({
        "accept" : "application/json",
        "user-key" : this.userKey
      })

      return this._http.get(`https://developers.zomato.com/api/v2.1/locations?query=${name}`, {headers});
    }
}