import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherLocation } from './resurces/weather.location.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  // weatherLocation: WeatherLocation[] = [];

  constructor(public http: HttpClient) { }

  data: WeatherLocation[] = [];
  weatherData: BehaviorSubject<WeatherLocation[]> = new BehaviorSubject<WeatherLocation[]>(this.data);

GetLocation(location: string): Observable<any> {
  this.data = [];
  return this.http.get<WeatherLocation[]>(environment.baseURL + location).pipe(
    map((response) => response.map(test => {
        const {Key, Country, LocalizedName} = test;
        const weatherData: WeatherLocation = {
          Key,
          Country: { LocalizedName: Country.LocalizedName },
          LocalizedName
        };
        this.data.push(weatherData);
        // console.log(this.data);
        return weatherData;
      })
    )
    ); }
}
