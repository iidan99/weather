
export interface WeatherDay {
        Date: {DailyForecasts: {Date: string}};
        Temperature: {Temperature: { Minimum: {Value: number, Unit?: string, UnitType?: string}, Maximum: {}}};
        // TemperatireUnit: {DailyForecasts: {Temperature: { Minimum: {Unit: string}}}};
        Day: {DailyForecasts: {Day: {IconPhrase: string}}};
}