
export interface WeatherDay {
        Date: string;
        TemperatureType: string;
        Day: {DailyForecasts: {Day: {IconPhrase: string}}};
        TemperatureValue: number;
}