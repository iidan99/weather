import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { getLocaleDateTimeFormat } from '@angular/common';
import { map } from 'rxjs/operators';
import { WeatherDay } from './resurces/weather.perday.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  location: string;
  data: WeatherDay[] = [];
  constructor(private http: HttpClient) { }
  currentLocation: string;
  weatherData: BehaviorSubject<WeatherDay[]> = new BehaviorSubject<WeatherDay[]>(this.data);

  getWeatherData(city_key: string): Observable<any> {
    this.data = [];
    return this.http.get<WeatherDay[]>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&metric=true`)
      .pipe(map((response) =>
        response['DailyForecasts'].map(test => {
          const { Date, Day, Temperature } = test;
          const weekInfo: WeatherDay = {
            Date,
            Day,
            Temperature
          };

          //  console.log(this.data);
          this.data.push(weekInfo);
          // console.log(this.data);

          return weekInfo;
        })
        ));
      }
    }
// `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&metric=true`