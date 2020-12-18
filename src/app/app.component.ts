import { Component } from '@angular/core';
import { RestaurantService } from "./restaurant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zomato';
  error: any = null;
  results: any[] = [];
  name = "";

  selectedLocationLat = "28.625789"; 
  selectedLocationLong = "77.210276";

  constructor(private res: RestaurantService) {
  }
  onSearch() {
    console.log(this.name)
    this.res.getSearch(this.name, this.selectedLocationLat, this.selectedLocationLong).subscribe((data: any) => {
      this.results = data.restaurants;
      console.log(data);
    },
      error => {
        this.error = "result Not Found"
      })
  }
  onCities() {
    console.log(this.name)
    this.res.getCities(this.name).subscribe((data: any) => {
      this.results = data.restaurants;
      console.log(data);
    },
      error => {
        this.error = "result Not Found"
      })
  }
  onLocation() {
    console.log(this.name)
    this.res.getLocation(this.name).subscribe((data: any) => {
      this.results = data.restaurants;
      console.log(data);
    },
      error => {
        this.error = "result Not Found"
      })
  }

  getLatLong(cityName: string) {
    console.log(cityName)
    this.res.getLocation(cityName)
    .subscribe((locationDetails: any) => {
     this.selectedLocationLat = locationDetails.location_suggestions[0].latitude;
     this.selectedLocationLong = locationDetails.location_suggestions[0].longitude;
    })
  }
}