import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherLocation } from './resurces/weather.location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(public http: HttpClient) { }
data: WeatherLocation[] = [
  {
    "Version": 1,
    "Key": "109040",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Lodja",
    "Country": {
      "ID": "CD",
      "LocalizedName": "Democratic Republic of the Congo"
    },
    "AdministrativeArea": {
      "ID": "SN",
      "LocalizedName": "Sankuru"
    }
  },
  {
    "Version": 1,
    "Key": "212481",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Lod",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "M",
      "LocalizedName": "Central District"
    }
  },
  {
    "Version": 1,
    "Key": "213739",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Lodi",
    "Country": {
      "ID": "IT",
      "LocalizedName": "Italy"
    },
    "AdministrativeArea": {
      "ID": "25",
      "LocalizedName": "Lombardy"
    }
  },
  {
    "Version": 1,
    "Key": "259736",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Lodhran",
    "Country": {
      "ID": "PK",
      "LocalizedName": "Pakistan"
    },
    "AdministrativeArea": {
      "ID": "PB",
      "LocalizedName": "Punjab"
    }
  },
  {
    "Version": 1,
    "Key": "331965",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Lodi",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "CA",
      "LocalizedName": "California"
    }
  },
  {
    "Version": 1,
    "Key": "225685",
    "Type": "City",
    "Rank": 61,
    "LocalizedName": "Lodwar",
    "Country": {
      "ID": "KE",
      "LocalizedName": "Kenya"
    },
    "AdministrativeArea": {
      "ID": "43",
      "LocalizedName": "Turkana"
    }
  },
  {
    "Version": 1,
    "Key": "3241856",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Lodhwe",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "BR",
      "LocalizedName": "Bihar"
    }
  },
  {
    "Version": 1,
    "Key": "2954917",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Lodhian Khas",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "PB",
      "LocalizedName": "Punjab"
    }
  },
  {
    "Version": 1,
    "Key": "3122690",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Lodhauri",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "UP",
      "LocalizedName": "Uttar Pradesh"
    }
  },
  {
    "Version": 1,
    "Key": "3093938",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Lodhwari",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "UP",
      "LocalizedName": "Uttar Pradesh"
    }
  }
];
  
  
  GetLocation(locationKey: string) {
    // return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hqqt9CBN6GZG01X5ecACK5CfQXMp4r9B&q=${locationKey}`).subscribe(
    //   (response: WeatherLocation[]) => {
    //    this.data = response; 
    //   // console.log(this.data); 
    //   },
    //    (error) => console.log(error)
    // );
  }
}