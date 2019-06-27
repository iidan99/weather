import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherMainViewComponent } from './weather-main-view/weather-main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DayWeatherComponent } from './weather-main-view/day-weather/day-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherMainViewComponent,
    SearchBarComponent,
    DayWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
