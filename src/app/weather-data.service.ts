import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval } from 'rxjs';
import { getLocaleDateTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  location: string;
  data: JSON;
  constructor(private http: HttpClient) { }
  currentLocation: string;

  getWeatherData(location: string) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&q=${location}`).subscribe(
      (response: JSON) => {
       this.data = response; 
       console.log(this.data); 
      },
       (error) => console.log(error)
    );
  }
}
// `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&metric=true`