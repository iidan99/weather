export class WeatherLocation{
    constructor(public city: string, public key: string, public country: string)
    {
        this.city = city;
        this.key = key;
        this.country = country;
    }
}