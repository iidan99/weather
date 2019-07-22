import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { FormsModule } from '@angular/forms';
import { WeatherLocation } from '../resurces/weather.location.model';
import { WeatherDataService } from '../weather-data.service';
import { takeUntil, map, debounceTime, switchMap, filter } from 'rxjs/operators';
import { Observable, Observer, Subscription, Subject, BehaviorSubject, empty } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  data: string;
  loc: WeatherLocation[] = [];
  localData: Subscription;
  dispose$: Subject<void> = new Subject();
  inputVal: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private locationService: LocationService, private Weater: WeatherDataService) { }

  ngOnInit() {
    this.inputVal
      .pipe(
        takeUntil(this.dispose$),
        debounceTime(300),
        filter(searchTerm => searchTerm.length >= 2),
        switchMap(searchTerm => this.locationService.GetLocation(searchTerm))
      )
      .subscribe();
  }

  updateSubjectValue(val: string): void {
    this.inputVal.next(val);
    setTimeout(() => {
      this.loc = this.locationService.data;
    }, 500);
 }

  OnSelect(element) {
    this.Weater.getWeatherData(element.Key);
  }

  ngOnDestroy() {
    this.dispose$.next();
    this.dispose$.complete();
  }
}
