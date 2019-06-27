import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherMainViewComponent } from './weather-main-view/weather-main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherMainViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
