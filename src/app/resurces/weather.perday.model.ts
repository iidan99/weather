
export interface WeatherDay {
        Date: {DailyForecasts: {date: string}};
        TemperatireValue: {DailyForecasts: {Temperatire: { Minimum: {Value}}}};
        TemperatireUnit: {DailyForecasts: {Temperatire: { Minimum: {Unit}}}};
        Day: {DailyForecasts: {Dat: {IconPhrase: string}}};
}