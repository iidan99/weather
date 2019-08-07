import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { WeatherDay } from '../resurces/weather.perday.model';

@Component({
  selector: 'app-weather-main-view',
  templateUrl: './weather-main-view.component.html',
  styleUrls: ['./weather-main-view.component.css']
})
export class WeatherMainViewComponent implements OnInit {
  weatherData: [{}];
  citySelect = false;
  dayNumber: number;
  days: number[] = [];
  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    
  }

  OnLocationSelect(location: string){
    this.weatherService.getWeatherData(location);
  }

}
