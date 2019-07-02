import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(public http: HttpClient) { }
  data: JSON;
  
  
  GetLocation(locationKey: string) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&q=${locationKey}`).subscribe(
      (response: JSON) => {
       this.data = response; 
       console.log(this.data); 
      },
       (error) => console.log(error)
    );}
}