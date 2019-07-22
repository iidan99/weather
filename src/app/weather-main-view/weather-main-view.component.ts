import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { WeatherDay } from '../resurces/weather.perday.model';

@Component({
  selector: 'app-weather-main-view',
  templateUrl: './weather-main-view.component.html',
  styleUrls: ['./weather-main-view.component.css']
})
export class WeatherMainViewComponent implements OnInit {
  weatherData: [{}] = [{
    "Headline": {
      "EffectiveDate": "2019-07-07T20:00:00+03:00",
      "EffectiveEpochDate": 1562518800,
      "Severity": 7,
      "Text": "Humid Sunday night to Monday night",
      "Category": "humidity",
      "EndDate": "2019-07-09T08:00:00+03:00",
      "EndEpochDate": 1562648400,
      "MobileLink": "http://m.accuweather.com/en/il/lod/212481/extended-weather-forecast/212481?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2019-07-07T07:00:00+03:00",
        "EpochDate": 1562472000,
        "Temperature": {
          "Minimum": {
            "Value": 25.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 32.0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2019-07-08T07:00:00+03:00",
        "EpochDate": 1562558400,
        "Temperature": {
          "Minimum": {
            "Value": 24.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2019-07-09T07:00:00+03:00",
        "EpochDate": 1562644800,
        "Temperature": {
          "Minimum": {
            "Value": 23.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2019-07-10T07:00:00+03:00",
        "EpochDate": 1562731200,
        "Temperature": {
          "Minimum": {
            "Value": 23.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 32.5,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2019-07-11T07:00:00+03:00",
        "EpochDate": 1562817600,
        "Temperature": {
          "Minimum": {
            "Value": 24.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 33.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/lod/212481/daily-weather-forecast/212481?day=5&unit=c&lang=en-us"
      }
    ]
  }];

  dayNumber:number;
  daysName: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  days: number[] = [];
  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    
  }

  OnLocationSelect(location: string){
    this.weatherService.getWeatherData(location);
  }

}
