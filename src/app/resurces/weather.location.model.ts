
export class WeatherLocation{
    constructor(public Version: number, public LocalizedName: string, public Key: string, public Country: { LocalizedName: string, ID: string })
    {
        this.Version = Version;
        this.LocalizedName = LocalizedName;
        this.Key = Key;
        this.Country = Country;
    }
}