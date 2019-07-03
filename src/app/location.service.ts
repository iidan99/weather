import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherLocation } from './resurces/weather.location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(public http: HttpClient) { }
  data: WeatherLocation[];
  
  
  GetLocation(locationKey: string) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&q=${locationKey}`).subscribe(
      (response: WeatherLocation[]) => {
       this.data = response; 
      // console.log(this.data); 
      },
       (error) => console.log(error)
    );}
}