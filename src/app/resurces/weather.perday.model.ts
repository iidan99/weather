
export interface WeatherDay {
        Date: {DailyForecasts: {Date: string}};
        TemperatireValue: {DailyForecasts: {Temperatire: { Minimum: {Value}}}};
        TemperatireUnit: {DailyForecasts: {Temperatire: { Minimum: {Unit}}}};
        Day: {DailyForecasts: {Day: {IconPhrase: string}}};
}