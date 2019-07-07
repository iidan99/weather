
export class WeatherDay{
    constructor(public LocalizedName: string, public Key: string, public Country: { LocalizedName: string, ID: string })
    {
        this.LocalizedName = LocalizedName;
        this.Key = Key;
        this.Country = Country;
    }
}