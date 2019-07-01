import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {
  @Input() dayWeather;
  constructor() { }
  Days = [1,2,3,4,5];
  ngOnInit() {

  }

}
