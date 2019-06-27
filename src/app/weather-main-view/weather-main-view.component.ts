import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-main-view',
  templateUrl: './weather-main-view.component.html',
  styleUrls: ['./weather-main-view.component.css']
})
export class WeatherMainViewComponent implements OnInit {

  constructor(private weatherService: WeatherDataService) { }
Days = [1,2,3,4,5];
  ngOnInit() {
  }

}
