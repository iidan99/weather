import { Component, OnInit, Input } from '@angular/core';
import { WeatherDataService } from 'src/app/weather-data.service';
import { WeatherDay } from 'src/app/resurces/weather.perday.model';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {
  dayWeather: WeatherDay[] = [];
  
  constructor(private weatherSrevice: WeatherDataService) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.dayWeather = this.weatherSrevice.data;
      console.log(this.dayWeather[0].Date);
      console.log(this.dayWeather);
    }, 1000);
  }

}
