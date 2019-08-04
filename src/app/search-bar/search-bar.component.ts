import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  location: WeatherLocation[] = [];
  localData: Subscription;
  dispose$: Subject<void> = new Subject();
  inputVal: BehaviorSubject<string> = new BehaviorSubject('');
  keyVlue: BehaviorSubject<string> = new BehaviorSubject('');
  @Output() selectCity: EventEmitter<boolean> = new EventEmitter<boolean>();

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


      
      // this.keyVlue.pipe(
      //   takeUntil(this.dispose$),)
      //   switchMap(key => this.Weater.getWeatherData(key))
      // ).subscribe();
  }

  updateSubjectValue(val: string): void {
    this.inputVal.next(val);
    setTimeout(() => {
      this.location = this.locationService.data;
    }, 500);
 }

  OnSelect(element) {
    this.keyVlue
      .pipe(
        takeUntil(this.dispose$),
        debounceTime(300),
        switchMap(searchTerm => this.Weater.getWeatherData(element.Key))
      )
      .subscribe();
    this.keyVlue.next(element.key)
    this.selectCity.emit(true);

    // this.Weater.getWeatherData();
  }

  ngOnDestroy() {
    this.dispose$.next();
    this.dispose$.complete();
  }
}
