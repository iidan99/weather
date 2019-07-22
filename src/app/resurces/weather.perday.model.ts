
export class WeatherDay {
    constructor(public DailyForecasts: { Date: string, Temperature: { Minimum: { Value: number, Unit: string } }, Day: { IconPhrase: string } }) {
        this.DailyForecasts.Date = DailyForecasts.Date;
        this.DailyForecasts.Temperature.Minimum.Value = DailyForecasts.Temperature.Minimum.Value;
        this.DailyForecasts.Temperature.Minimum.Unit = DailyForecasts.Temperature.Minimum.Unit;
        this.DailyForecasts.Day.IconPhrase = this.DailyForecasts.Day.IconPhrase;
    }
}