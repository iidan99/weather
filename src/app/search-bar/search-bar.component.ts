import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  data:string;
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.GetLocation("");
  }

  onChange() {
    this.locationService.GetLocation(this.data);
    setTimeout(() => {
      // this.info = this.locationService.data;
      this.locationService.data.forEach(element => {
        console.log(element.Country);
      });
    }, 500);
  }
}
