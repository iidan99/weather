import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { FormsModule } from '@angular/forms';
import { WeatherLocation } from '../resurces/weather.location.model';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  data:string;
  loc: WeatherLocation[] = [];
  constructor(private locationService: LocationService, private Weater: WeatherDataService) { }

  ngOnInit() {
    this.locationService.GetLocation("");
  }

  onChange() {
    this.locationService.GetLocation(this.data);
    setTimeout(() => {
      // this.info = this.locationService.data;
      this.locationService.data.forEach(element => {
      });
    }, 200);
    setTimeout(() => {
      // this.info = this.locationService.data;
      this.loc = this.locationService.data;
    }, 300);
  }

  OnSelect(element){
    this.Weater.getWeatherData(element.Key)
  }
}
