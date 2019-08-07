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

  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dayWeather = this.weatherService.data;
    }, 300);
  }

}
