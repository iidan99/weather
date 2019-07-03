export class WeatherLocation{
    constructor(public LocalizedName: string, public Key: string, public Country: string)
    {
        this.LocalizedName = LocalizedName;
        this.Key = Key;
        this.Country[LocalizedName] = Country[LocalizedName];
    }
}